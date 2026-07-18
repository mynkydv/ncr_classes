import { useState } from "react";
import PageHead from "../components/PageHead";
import LeadForm from "../components/LeadForm";
import { Field, Select, CheckRow } from "../components/Field";
import { OPENINGS } from "../data/site";
import { waURL } from "../lib/wa";

export default function JoinTutor() {
  const cats = ["All", ...new Set(OPENINGS.map((o) => o.cat))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? OPENINGS : OPENINGS.filter((o) => o.cat === cat);

  return (
    <>
      <PageHead blob="b2" crumb="For teachers"
        title="Teaching assignments near your home."
        lede="Register once. We'll contact you when an assignment close to you matches what you teach — school subjects, hobbies, exam prep or a full-time school role." />

      <section className="sec sec--tight"><div className="wrap">
        <div className="head" style={{ marginBottom: 22 }}>
          <span className="kicker">Live right now</span>
          <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)" }}>Open assignments</h2>
        </div>
        <div className="filters">
          {cats.map((c) => (
            <button key={c} className={cat === c ? "on" : ""} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="jobs">
          {list.map((o) => (
            <article className="job" key={o.ref}>
              <div className="top"><b>{o.title}</b><span className="ref">{o.ref}</span></div>
              <div className="meta"><span>📍 {o.area}</span><span>{o.mode}</span><span>{o.days}</span></div>
              <div className="pay">{o.pay}</div>
              <a className="apply" target="_blank" rel="noopener noreferrer"
                 href={waURL(`Hi, I'm interested in assignment ${o.ref} — ${o.title} (${o.area}).`)}>
                Apply on WhatsApp →
              </a>
            </article>
          ))}
        </div>
      </div></section>

      <section className="sec sec--grey"><div className="wrap"><div className="formshell">
        <LeadForm prefix="T" kind="Tutor registration" submitLabel="Register as a teacher"
          note="We share your profile with a family only when there's a matching requirement. We'll go through the terms with you on WhatsApp before anything is confirmed.">

          <div className="grid2">
            <Field label="Full name" required><input name="Name" required /></Field>
            <Field label="WhatsApp number" required><input name="Phone" type="tel" inputMode="numeric" required /></Field>
          </div>
          <div className="grid2">
            <Field label="Email"><input name="Email" type="email" /></Field>
            <Field label="Highest qualification" required><input name="Qualification" placeholder="e.g. M.Sc Physics, B.Ed" required /></Field>
          </div>

          <Field label="What can you teach" required>
            <CheckRow name="teach" options={["School subjects","Hobby / activity","Exam prep","Languages","Special education","Full-time school role"]} />
          </Field>

          <div className="grid2">
            <Field label="Subjects or activities" required><input name="Subjects" placeholder="e.g. Physics, Maths — Class 9 to 12" required /></Field>
            <Field label="Years of experience" required>
              <Select name="Experience" required options={["Less than 1 year","1 – 3 years","3 – 5 years","5 – 10 years","More than 10 years"]} />
            </Field>
          </div>
          <div className="grid2">
            <Field label="Localities you can travel to" required><input name="Localities" placeholder="e.g. Indirapuram, Vaishali" required /></Field>
            <Field label="Preferred mode" required><Select name="Mode" required options={["Home tuition only","Online only","Both"]} /></Field>
          </div>
          <div className="grid2">
            <Field label="Availability"><input name="Availability" placeholder="e.g. Weekdays after 4pm" /></Field>
            <Field label="Expected fee"><input name="Fee" placeholder="e.g. ₹8,000/month, 3 days a week" /></Field>
          </div>
          <Field label="Anything else">
            <textarea name="Notes" placeholder="Current job, boards you've taught, results you're proud of, whether you have a vehicle…" />
          </Field>
          <Field label="CV (optional)" hint="Or WhatsApp it to us after registering.">
            <input name="CV" type="file" accept=".pdf,.doc,.docx" />
          </Field>
        </LeadForm>

        <aside className="side">
          <h3 style={{ marginBottom: 12 }}>Why teachers stay</h3>
          <ul>
            <li>Assignments in your own localities</li>
            <li>Fee, timings and travel known up front</li>
            <li>Briefed on the child before the demo</li>
            <li>A real person you can call, not a helpdesk</li>
            <li>Full-time school vacancies passed on too</li>
          </ul>
          <div className="btnrow">
            <a className="btn btn--mark" style={{ fontSize: 15, padding: "12px 22px" }}
               href={waURL("Hi, I want to register as a teacher.")} target="_blank" rel="noopener noreferrer">
              Prefer WhatsApp?
            </a>
          </div>
        </aside>
      </div></div></section>
    </>
  );
}
