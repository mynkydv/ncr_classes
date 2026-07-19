// Cloudflare Worker: serves the built SPA from ./dist and handles /api/*.
//
// Static assets are served automatically by the assets binding. Only the
// paths listed in `run_worker_first` (see wrangler.jsonc) reach this script,
// so everything here is API handling — never asset serving.
//
// To actually store leads, uncomment ONE of the options below and set the
// matching variable in the Cloudflare dashboard (Worker → Settings →
// Variables and Secrets). Secrets arrive on `env`, NOT on `process.env`.

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

async function handleLead(request, env) {
  let lead;
  try {
    lead = await request.json();
  } catch {
    return json({ error: "Expected JSON body" }, 400);
  }

  console.log("New lead:", JSON.stringify(lead));

  // ---- Option A: Airtable -------------------------------------------------
  // Vars needed: AIRTABLE_TOKEN, AIRTABLE_BASE, AIRTABLE_TABLE
  //
  // await fetch(`https://api.airtable.com/v0/${env.AIRTABLE_BASE}/${env.AIRTABLE_TABLE}`, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${env.AIRTABLE_TOKEN}`,
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({ fields: lead })
  // });

  // ---- Option B: Google Sheet via Apps Script webhook ---------------------
  // Var needed: SHEET_WEBHOOK
  //
  // await fetch(env.SHEET_WEBHOOK, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(lead)
  // });

  return json({ ok: true, reference: lead.Reference });
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
