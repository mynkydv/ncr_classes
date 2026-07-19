// Vercel serverless function: receives form submissions.
//
// Right now it just logs and returns OK, so nothing breaks in production.
// To actually store leads, uncomment ONE of the options below and set the
// matching environment variable in Vercel (Settings → Environment Variables).

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const lead = req.body || {};
  console.log("New lead:", JSON.stringify(lead));

  // ---- Option A: Airtable -------------------------------------------------
  // Env vars needed: AIRTABLE_TOKEN, AIRTABLE_BASE, AIRTABLE_TABLE
  //
  // await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/${process.env.AIRTABLE_TABLE}`, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({ fields: lead })
  // });

  // ---- Option B: Google Sheet via Apps Script webhook ---------------------
  // Env var needed: SHEET_WEBHOOK
  //
  // await fetch(process.env.SHEET_WEBHOOK, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(lead)
  // });

  return res.status(200).json({ ok: true, reference: lead.Reference });
}
