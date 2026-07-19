// Cloudflare Worker: serves the built SPA from ./dist and handles /api/*.
//
// Static assets are served automatically by the assets binding. Only the
// paths listed in `run_worker_first` (see wrangler.jsonc) reach this script,
// so everything here is API handling — never asset serving.

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/lead") {
      if (request.method !== "POST") {
        return json({ error: "Method not allowed" }, 405);
      }
      return handleLead(request, env);
    }

    return json({ error: "Not found" }, 404);
  }
};

// Columns that exist in Airtable. Everything else a form collects is folded
// into Details, so adding or renaming a form field can never 422 the request
// with UNKNOWN_FIELD_NAME. Keep this list in sync with the Airtable table.
const COLUMNS = ["Reference", "Type", "Name", "Phone", "Email"];

async function handleLead(request, env) {
  let lead;
  try {
    lead = await request.json();
  } catch {
    return json({ error: "Expected JSON body" }, 400);
  }

  const reason = await saveToAirtable(lead, env);

  // Always 200, even when storage fails: the success screen offers a WhatsApp
  // hand-off carrying the full requirement, and that is a better outcome than
  // an error page. `stored` lets the client push harder on that hand-off.
  //
  // `reason` is a short code (never the raw Airtable body or any credential)
  // so a failure can be diagnosed from the response without digging through
  // logs. Safe to expose: it names the failure class, not the cause detail.
  return json({
    ok: true,
    stored: reason === null,
    ...(reason ? { reason } : {}),
    reference: lead.Reference
  });
}

// Returns null on success, or a short failure code.
async function saveToAirtable(lead, env) {
  const { AIRTABLE_TOKEN, AIRTABLE_BASE, AIRTABLE_TABLE } = env;

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE || !AIRTABLE_TABLE) {
    const missing = [
      !AIRTABLE_TOKEN && "AIRTABLE_TOKEN",
      !AIRTABLE_BASE && "AIRTABLE_BASE",
      !AIRTABLE_TABLE && "AIRTABLE_TABLE"
    ].filter(Boolean);
    console.error("Airtable not configured — lead not stored:", JSON.stringify(lead));
    return `missing_env:${missing.join(",")}`;
  }

  // Split the payload: known columns go to their own fields, the rest is
  // rendered as readable "Label: value" lines in Details.
  const fields = {};
  const extras = [];

  for (const [key, value] of Object.entries(lead)) {
    if (value === undefined || value === null || value === "") continue;
    if (COLUMNS.includes(key)) fields[key] = String(value);
    else extras.push(`${key}: ${value}`);
  }

  if (extras.length) fields.Details = extras.join("\n");

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${encodeURIComponent(AIRTABLE_TABLE)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          "Content-Type": "application/json"
        },
        // typecast lets Airtable create select options it has not seen before
        // rather than rejecting the whole record.
        body: JSON.stringify({ fields, typecast: true })
      }
    );

    if (!res.ok) {
      // Log the lead alongside the error so it is recoverable from logs.
      const detail = await res.text();
      console.error(
        `Airtable ${res.status}: ${detail} — lead not stored:`,
        JSON.stringify(lead)
      );
      // Airtable's error `type` (UNKNOWN_FIELD_NAME, NOT_FOUND, ...) names the
      // problem without exposing the request or any credential.
      let type = "";
      try {
        type = JSON.parse(detail)?.error?.type ?? JSON.parse(detail)?.error ?? "";
      } catch { /* non-JSON body — status alone is enough */ }
      return `airtable_${res.status}${type ? `:${type}` : ""}`;
    }

    console.log("Lead stored:", lead.Reference);
    return null;
  } catch (err) {
    console.error(`Airtable request failed: ${err} — lead not stored:`, JSON.stringify(lead));
    return "airtable_unreachable";
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
