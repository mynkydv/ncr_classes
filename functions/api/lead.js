// Cloudflare Pages Function: receives form submissions.
//
// The file path sets the route — functions/api/lead.js serves /api/lead.
// Exporting onRequestPost means only POST reaches this handler; anything
// else gets a 405 from the runtime automatically.
//
// Right now it just logs and returns OK, so nothing breaks in production.
// To actually store leads, uncomment ONE of the options below and set the
// matching variable in Cloudflare (Pages project → Settings → Environment
// variables). Note secrets arrive on `env`, NOT on `process.env`.

export async function onRequestPost({ request, env }) {
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
