import PageHead from "../components/PageHead";
import LeadForm from "../components/LeadForm";
import { Field, Select, CheckRow } from "../components/Field";
import { waURL } from "../lib/wa";

export default function FindTutor() {
  return (
    <>
      <PageHead blob="b1" crumb="For parents"
        title="Tell us what your child needs."
        lede="About two minutes. We read every requirement ourselves and come back with a shortlist — usually the same day." />

      <section className="sec"><div className="wrap"><div className="formshell">
        <LeadForm prefix="P" kind="Parent requirement" submitLabel="Send requirement"
          note="We use your number only for this requirement. We never publish it or sell it on.">

          <Field label="What do you need help with" required>
            <CheckRow name="need" options={["School subjects","Hobby / activity","Summer program","Exam prep","Language","Special needs"]} />
          </Field>

          <div className="grid2">
            <Field label="Subject or activity" required><input name="Subject" placeholder="e.g. Maths and Science" required /></Field>
            <Field label="Class / age" required><input name="Class" placeholder="e.g. Class 8" required /></Field>
          </div>

          <div className="grid2">
            <Field label="Board"><Select name="Board" placeholder="Select" options={["CBSE","ICSE","IB","IGCSE","State board","Not applicable"]} /></Field>
            <Field label="Mode" required><Select name="Mode" required options={["At our home","Online","Either is fine"]} /></Field>
          </div>

          <div className="grid2">
            <Field label="Locality" required><input name="Locality" placeholder="e.g. Sector 50, Noida" required /></Field>
            <Field label="Days & timing"><input name="Timing" placeholder="e.g. Mon/Wed/Fri after 5pm" /></Field>
          </div>

          <div className="grid2">
            <Field label="Monthly budget">
              <Select name="Budget" placeholder="Select"
                options={["Under ₹3,000","₹3,000 – ₹6,000","₹6,000 – ₹10,000","₹10,000 – ₹15,000","Above ₹15,000","Not sure — advise me"]} />
            </Field>
            <Field label="Start by">
              <Select name="Start" options={["As soon as possible","Within 2 weeks","Next month","Just exploring"]} />
            </Field>
          </div>

          <Field label="Anything we should know">
            <textarea name="Notes" placeholder="Preferred gender of teacher, how your child learns best, topics they struggle with…" />
          </Field>

          <div className="grid2">
            <Field label="Your name" required><input name="Name" required /></Field>
            <Field label="WhatsApp number" required><input name="Phone" type="tel" inputMode="numeric" placeholder="10 digits" required /></Field>
          </div>
          <Field label="Email (optional)"><input name="Email" type="email" /></Field>
        </LeadForm>

        <aside className="side">
          <h3 style={{ marginBottom: 12 }}>What happens next</h3>
          <ul>
            <li>We log it and give it a reference number</li>
            <li>We WhatsApp you the same day to confirm details</li>
            <li>You get 2–3 shortlisted profiles</li>
            <li>Free demo class with whoever you pick</li>
            <li>You decide only after the demo</li>
          </ul>
          <div className="btnrow">
            <a className="btn btn--mark" style={{ fontSize: 15, padding: "12px 22px" }}
               href={waURL("Hi, I am looking for a tutor.")} target="_blank" rel="noopener noreferrer">
              Prefer WhatsApp?
            </a>
          </div>
        </aside>
      </div></div></section>
    </>
  );
}
