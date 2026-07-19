import { Link } from "react-router-dom";
import { CONFIG } from "../data/site";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import PhotoSlot from "../components/PhotoSlot";
import Steps from "../components/Steps";

const FACES = [["A", "#0E5C42"], ["R", "#E0552F"], ["S", "#3E7BC4"], ["M", "#B07C00"]];

const DOORS = [
  { to: "/find-a-tutor", cap: "var(--mark)",  bg: "var(--mark-light,#FFF3D0)", ico: "👨‍👩‍👧",
    h: "I'm a parent", p: "Find a tutor for school subjects, hobbies, summer classes or exam prep.", cta: "Post a requirement" },
  { to: "/join-as-tutor", cap: "var(--green)", bg: "var(--green-light,#E6F2EC)", ico: "📚",
    h: "I'm a teacher", p: "Get tuition and school assignments near your home, matched to what you teach.", cta: "See open assignments" },
  { to: "/for-schools", cap: "var(--rust)", bg: "var(--rust-light,#FDE9E2)", ico: "🏫",
    h: "We're a school", p: "Hire subject teachers, shadow teachers, special educators and part-time staff.", cta: "Send a requirement" }
];

const PARENT_STEPS = [
  { title: "Send the requirement", body: "Subject or activity, class, board, locality, timings, budget. Two minutes." },
  { title: "We shortlist by hand", body: "From teachers we've already placed and verified. You see profiles before anyone gets your number." },
  { title: "Free demo class", body: "Meet the teacher at home or online. No obligation to continue." },
  { title: "Classes begin", body: "We check in after the first few sessions to make sure it's actually working for your child." }
];

const TUTOR_STEPS = [
  { title: "Register once", body: "Subjects, localities, availability, expected fee." },
  { title: "We call you when it fits", body: "You're not competing against four hundred applicants." },
  { title: "Give the demo", body: "We brief you on the child and the family first, so you know what you're walking into." }
];

const SCHOOL_STEPS = [
  { title: "Share the role", body: "Position, subject, grades, employment type, start date, salary band." },
  { title: "Shortlist in 3–5 working days", body: "Screened CVs with our own notes on each candidate — not a database dump." },
  { title: "You interview", body: "We coordinate scheduling and follow up with candidates for you." },
  { title: "Through to joining", body: "We stay with the candidate through offer, notice period and joining date." }
];

const COVER = [
  { ico: "📖", bg: "var(--mark-l)",  h: "School subjects", p: "Nursery to Class 12 — CBSE, ICSE, IB, IGCSE and State boards." },
  { ico: "🎨", bg: "var(--sky-l)",   h: "Hobby & activity", p: "Music, dance, art, chess, robotics, coding, sports coaching." },
  { ico: "☀️", bg: "var(--rust-l)",  h: "Summer programs", p: "Holiday batches, camps and catch-up classes." },
  { ico: "🎯", bg: "var(--green-l)", h: "Skills & exams", p: "Spoken English, languages, olympiads, entrance prep." }
];

const WHY = [
  { ico: "🔎", h: "Two or three names", p: "Not forty profiles to sift through, and not ten tutors calling you at once." },
  { ico: "🙋", h: "A person reads every request", p: "Each one gets a reference number and someone who follows it through." },
  { ico: "🤝", h: "We know the teachers", p: "Most of our network has been placed by us before. We know who's reliable." },
  { ico: "📞", h: "One point of contact", p: "The same person handles your requirement from first message to first class." }
];

const FAQS = [
  ["What does it cost me as a parent?", "Posting a requirement is free. There's no registration charge, no subscription and nothing payable before you've met a teacher and decided to go ahead."],
  ["How quickly will I hear back?", "Most requirements get a first response the same day and a shortlist within 24–48 hours. School hiring takes 3–5 working days."],
  ["Is the demo class free?", "Yes. You meet the teacher, see how they work with your child, and decide afterwards. Nothing is payable before the demo."],
  ["What if the teacher isn't the right fit?", "Tell us as early as you can. We'd much rather sort out a wrong match than lose you — talk to us and we'll look at other teachers for you."],
  ["Do you cover online classes?", "Yes. Many teachers take both home and online sessions, and for some subjects online works out better on timing and cost."],
  ["Are teachers verified?", "We check qualification documents and photo ID for every teacher we place, and most of our network has been placed by us before."],
  ["Do I have to use the website?", "No. The form is faster because it collects everything at once, but WhatsApp us and we'll fill it in for you."]
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="blob b1" /><div className="blob b2" />
        <div className="wrap">
          <div className="herogrid">
            <div>
              <span className="kicker">Delhi · Gurugram · Noida · Ghaziabad · Faridabad</span>
              <h1>
                The right teacher,{" "}
                <span>found by a human.
                  <svg viewBox="0 0 400 16" preserveAspectRatio="none">
                    <path d="M4 11 C 90 3, 200 15, 396 6" />
                  </svg>
                </span>
              </h1>
              <p className="lede">
                Tell us what your child needs. We shortlist teachers we already know and trust,
                arrange a free demo class, and stay with you until it's working.
              </p>
              <div className="btnrow">
                <Link className="btn btn--mark" to="/find-a-tutor">Find a tutor →</Link>
                <Link className="btn btn--out" to="/join-as-tutor">I want to teach</Link>
              </div>
              <div className="trustrow">
                <div className="faces">
                  {FACES.map(([l, c]) => (
                    <div key={l} className="face" style={{ background: c }}>{l}</div>
                  ))}
                </div>
                <div>
                  <div className="stars">★★★★★</div>
                  <small>Trusted by <b>families across NCR</b></small>
                </div>
              </div>
            </div>

            <div className="herostage">
              <PhotoSlot src="hero.jpg" alt="A tutor teaching a student at home" ratio="4/5"
                hint="Portrait 4:5. A real tutor mid-lesson with a student at a dining table. Warm light, faces visible, not posed. This one image does more than everything else on the page." />
              <div className="float f1"><div className="pill" style={{ background: "var(--mark-l)" }}>📐</div>
                <div><b>Maths, Class 9</b><small>Sector 50, Noida</small></div></div>
              <div className="float f2"><div className="pill" style={{ background: "var(--sky-l)" }}>🎹</div>
                <div><b>Keyboard, age 7</b><small>DLF Phase 3</small></div></div>
              <div className="float f3"><div className="pill" style={{ background: "var(--green-l)" }}>✓</div>
                <div><b>Demo arranged</b><small>in 6 hours</small></div></div>
            </div>
          </div>
        </div>

        <div className="marq">
          <div className="track">
            {[...CONFIG.subjects, ...CONFIG.subjects].map((s, i) => (
              <span className="mchip" key={`${s}-${i}`}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap">
          <div className="doors">
            {DOORS.map((d, i) => (
              <Reveal key={d.to} delay={i * 0.09}>
                <Link className="door" to={d.to} style={{ display: "block" }}>
                  <div className="cap" style={{ background: d.cap }} />
                  <div className="body">
                    <div className="ico" style={{ background: d.bg }}>{d.ico}</div>
                    <h3>{d.h}</h3>
                    <p>{d.p}</p>
                    <span className="go">{d.cta} <u>→</u></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section className="sec sec--grey" id="parents">
        <div className="wrap">
          <div className="jour">
            <Reveal>
              <span className="kicker y">For parents</span>
              <h2>You describe your child. <mark>We do the finding.</mark></h2>
              <p className="lede" style={{ marginTop: 18 }}>
                No login, no scrolling through four hundred profiles, no ten tutors calling you the
                same evening. Send one requirement — get two or three names we'd stand behind personally.
              </p>
              <div className="btnrow"><Link className="btn" to="/find-a-tutor">Post your requirement</Link></div>
            </Reveal>
            <Reveal><Steps items={PARENT_STEPS} /></Reveal>
          </div>

          <div className="cards" style={{ marginTop: 56 }}>
            {COVER.map((c, i) => (
              <Reveal key={c.h} delay={i * 0.07} className="card3">
                <div className="ico" style={{ background: c.bg }}>{c.ico}</div>
                <b>{c.h}</b><span>{c.p}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="sec" id="teachers">
        <div className="wrap">
          <div className="jour flip">
            <Reveal>
              <span className="kicker">For teachers</span>
              <h2>Assignments near you, <mark>not a job board.</mark></h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Register once and we'll call you when something close to home fits what you teach.
                You're matched by a person who knows the family and the requirement — not left to
                bid against four hundred applicants.
              </p>
              <div className="btnrow">
                <Link className="btn" to="/join-as-tutor">Register now</Link>
                <Link className="btn btn--out" to="/join-as-tutor">See openings</Link>
              </div>
            </Reveal>
            <Reveal>
              <PhotoSlot src="teacher.jpg" alt="A teacher at work" ratio="4/3"
                hint="Landscape 4:3. One of your actual tutors, smiling, at a desk or whiteboard. Ask permission and take it on your phone — that's genuinely fine." />
              <Steps items={TUTOR_STEPS} className="mt-8" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SCHOOLS */}
      <section className="sec sec--grey" id="schools">
        <div className="wrap">
          <div className="jour">
            <Reveal>
              <span className="kicker r">For schools</span>
              <h2>Staff, from a network <mark>we already know.</mark></h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Subject teachers, shadow teachers, special educators, activity instructors,
                substitutes and part-time staff — sourced from teachers we've personally placed
                and followed up on.
              </p>
              <div className="btnrow"><Link className="btn" to="/for-schools">Send a hiring requirement</Link></div>
            </Reveal>
            <Reveal><Steps items={SCHOOL_STEPS} /></Reveal>
          </div>
        </div>
      </section>

      {/* WHY + STATS */}
      <section className="sec sec--green" id="how">
        <div className="wrap">
          <Reveal className="head">
            <span className="kicker">Why choose us</span>
            <h2>A portal sells you a list.<br />We take responsibility for the match.</h2>
          </Reveal>
          <div className="cards">
            {WHY.map((w, i) => (
              <Reveal key={w.h} delay={i * 0.07} className="card3">
                <div className="ico" style={{ background: "rgba(255,197,49,.2)" }}>{w.ico}</div>
                <b>{w.h}</b><span>{w.p}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="stats" delay={0.1}>
            {CONFIG.stats.map((s) => (
              <div className="stat" key={s.label}>
                <CountUp to={s.n} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* QUOTES */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="head"><span className="kicker s">Word of mouth</span><h2>What people say</h2></Reveal>
          <div className="quotes">
            {CONFIG.quotes.map((q, i) => (
              <Reveal key={i} delay={i * 0.08} className="q">
                <div className="stars">★★★★★</div>
                <p>{q.t}</p>
                <div className="by">
                  <div className="face" style={{ background: q.c, margin: 0 }}>{q.n.charAt(0)}</div>
                  <div><b>{q.n}</b><small>{q.r}</small></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="sec sec--tight sec--grey">
        <div className="wrap">
          <Reveal className="head" >
            <span className="kicker">Where we work</span>
            <h2 style={{ fontSize: "clamp(26px,3.6vw,38px)" }}>Across Delhi NCR</h2>
          </Reveal>
          <Reveal className="areas">
            {CONFIG.areas.map((a) => <span className="area" key={a}>{a}</span>)}
          </Reveal>
          <p className="formnote">Not on the list? Ask anyway — we cover most of NCR.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap">
          <Reveal className="head"><span className="kicker y">Questions</span><h2>Before you message us</h2></Reveal>
          <Reveal className="faq">
            {FAQS.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="sec sec--tight">
        <div className="wrap">
          <Reveal className="cta">
            <h2>Tell us what you need.</h2>
            <p className="lede" style={{ color: "rgba(255,255,255,.8)", marginTop: 14 }}>
              One form. A real person reads it. Usually a reply the same day.
            </p>
            <div className="btnrow">
              <Link className="btn btn--mark" to="/find-a-tutor">I need a tutor</Link>
              <Link className="btn btn--out" to="/join-as-tutor">I want to teach</Link>
              <Link className="btn btn--out" to="/for-schools">We're a school</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
