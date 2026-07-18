import PageHead from "../components/PageHead";
import LeadForm from "../components/LeadForm";
import { Field, Select } from "../components/Field";
import Reveal from "../components/Reveal";

const CAPS = [
  { ico: "🧑‍🏫", bg: "var(--rust-l)",  h: "Roles we fill", p: "PRT, TGT, PGT, shadow teachers, special educators, counsellors, activity instructors, lab assistants." },
  { ico: "📄", bg: "var(--sky-l)",   h: "Engagement types", p: "Permanent, contract, part-time, substitute cover and vacation programs." },
  { ico: "⏱️", bg: "var(--mark-l)",  h: "Turnaround", p: "Screened shortlist in 3–5 working days for most roles." },
  { ico: "🤐", bg: "var(--green-l)", h: "Handled discreetly", p: "Candidates currently employed elsewhere are approached in confidence." }
];

export default function ForSchools() {
  return (
    <>
      <PageHead crumb="For schools"
        title="Teaching staff, from a network we know personally."
        lede="Subject teachers, shadow teachers, special educators, activity instructors, substitutes and part-time staff across Delhi NCR." />

      <section className="sec sec--tight"><div className="wrap">
        <div className="cards">
          {CAPS.map((c, i) => (
            <Reveal key={c.h} delay={i * 0.07} className="card3">
              <div className="ico" style={{ background: c.bg }}>{c.ico}</div>
              <b>{c.h}</b><span>{c.p}</span>
            </Reveal>
          ))}
        </div>
      </div></section>

      <section className="sec sec--grey"><div className="wrap"><div className="formshell">
        <LeadForm prefix="S" kind="School hiring" submitLabel="Send hiring requirement"
          note="We'll acknowledge within one working day and confirm the brief before sourcing.">

          <div className="grid2">
            <Field label="Institution name" required><input name="School" required /></Field>
            <Field label="Type" required>
              <Select name="Type" required options={["CBSE school","ICSE school","IB / IGCSE school","State board school","Preschool / play school","Coaching institute","Activity centre","Other"]} />
            </Field>
          </div>
          <div className="grid2">
            <Field label="Role required" required><input name="Role" placeholder="e.g. PGT Chemistry, Shadow teacher" required /></Field>
            <Field label="Number of positions" required><input name="Positions" type="number" min="1" defaultValue="1" required /></Field>
          </div>
          <div className="grid2">
            <Field label="Grades / age group"><input name="Grades" placeholder="e.g. Class 11–12" /></Field>
            <Field label="Employment type" required>
              <Select name="Employment" required options={["Permanent / full-time","Contract","Part-time","Substitute cover","Vacation program"]} />
            </Field>
          </div>
          <div className="grid2">
            <Field label="Location" required><input name="Location" placeholder="e.g. Sector 45, Gurugram" required /></Field>
            <Field label="Required by" required>
              <Select name="RequiredBy" required options={["Immediately","Within 2 weeks","Within a month","Next academic session"]} />
            </Field>
          </div>
          <Field label="Salary band"><input name="Salary" placeholder="e.g. ₹35,000 – ₹45,000 per month" /></Field>
          <Field label="Requirement details">
            <textarea name="Notes" placeholder="Qualifications required, board experience, working hours, transport…" />
          </Field>
          <div className="grid2">
            <Field label="Contact person" required><input name="Name" required /></Field>
            <Field label="Designation"><input name="Designation" placeholder="e.g. HR Head, Principal" /></Field>
          </div>
          <div className="grid2">
            <Field label="Phone / WhatsApp" required><input name="Phone" type="tel" inputMode="numeric" required /></Field>
            <Field label="Official email" required><input name="Email" type="email" required /></Field>
          </div>
        </LeadForm>

        <aside className="side">
          <h3 style={{ marginBottom: 12 }}>Our process</h3>
          <ul>
            <li>Requirement confirmed with you in writing</li>
            <li>We source and screen — CVs come with our notes</li>
            <li>Shortlist in 3–5 working days</li>
            <li>We coordinate interview scheduling</li>
            <li>Commercial terms agreed in writing first</li>
          </ul>
        </aside>
      </div></div></section>
    </>
  );
}
