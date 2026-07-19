import { useState } from "react";
import { CONFIG } from "../data/site";
import { waURL, makeRef, summarise } from "../lib/wa";

/**
 * Wraps any set of fields. Handles validation, POST, and the success state
 * with a WhatsApp hand-off carrying the whole requirement pre-filled.
 */
export default function LeadForm({ prefix, kind, submitLabel, note, children }) {
  const [done, setDone] = useState(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    let bad = false;
    form.querySelectorAll("[required]").forEach((el) => {
      const empty = !el.value.trim();
      el.style.borderColor = empty ? "var(--rust)" : "";
      if (empty && !bad) { el.focus(); bad = true; }
    });
    if (bad) return;

    const data = {};
    new FormData(form).forEach((v, k) => {
      if (v instanceof File) { if (v.name) data[k] = v.name; return; }
      if (!String(v).trim()) return;
      data[k] = data[k] ? `${data[k]}, ${v}` : v;
    });

    const ref = makeRef(prefix);
    setBusy(true);

    // Did the requirement actually reach our records? If anything goes wrong
    // we still show the success screen — but we lead with the WhatsApp
    // hand-off instead of implying we have their details when we do not.
    let stored = false;

    if (CONFIG.endpoint) {
      try {
        const res = await fetch(CONFIG.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, Reference: ref, Type: kind })
        });
        // fetch only rejects on network failure, so check the status too.
        if (res.ok) {
          const body = await res.json().catch(() => ({}));
          stored = body.stored === true;
        }
      } catch {
        // network failed — the WhatsApp hand-off below still works
      }
    }

    setBusy(false);
    setDone({ ref, stored, name: data.Name, text: summarise(data, ref) });
  }

  if (done) {
    return (
      <div className="ok show">
        <div className="tick">✓</div>
        <h3>Got it — <span className="reftag">{done.ref}</span></h3>
        {done.stored ? (
          <>
            <p>
              Thanks{done.name ? `, ${done.name.split(" ")[0]}` : ""}. Your requirement is logged
              and we'll be in touch on WhatsApp, usually the same day.
            </p>
            <p style={{ marginBottom: 22 }}>
              Want to speed it up? Send the same details on WhatsApp and we'll pick it up right away.
            </p>
          </>
        ) : (
          <>
            <p>
              Thanks{done.name ? `, ${done.name.split(" ")[0]}` : ""}. We couldn't save your
              requirement just now — so please send it on WhatsApp to be sure it reaches us.
            </p>
            <p style={{ marginBottom: 22 }}>
              The button below has all your details filled in already. One tap.
            </p>
          </>
        )}
        <a className="btn btn--mark" target="_blank" rel="noopener noreferrer" href={waURL(done.text)}>
          Send on WhatsApp →
        </a>
      </div>
    );
  }

  return (
    <div className="card">
      <form onSubmit={onSubmit} noValidate>
        {children}
        <button className="btn btn--mark" type="submit" disabled={busy}>
          {busy ? "Sending…" : submitLabel} {!busy && "→"}
        </button>
        {note && <p className="formnote">{note}</p>}
      </form>
    </div>
  );
}
