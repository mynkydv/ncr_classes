// =====================================================================
//  EDIT THIS FILE — everything you normally change lives here.
// =====================================================================

export const CONFIG = {
  // Your WhatsApp number: country code, no + and no spaces
  phone: "917652067918",

  email: "ncr.classes.connect@gmail.com",
  instagram: "ncrclasses.connect",

  // Where form submissions are POSTed.
  // "/api/lead"  -> the serverless function in /api/lead.js (works on Vercel)
  // ""           -> WhatsApp-only mode, nothing is stored
  endpoint: "/api/lead",

  // TODO: replace with your real numbers. They count up on scroll.
  stats: [
    { n: 250, suffix: "+", label: "Families served" },
    { n: 400, suffix: "+", label: "Teachers in network" },
    { n: 12,  suffix: "+", label: "Schools partnered" },
    { n: 18,  suffix: "",  label: "Localities covered" }
  ],

  subjects: [
    "Maths","Physics","Chemistry","Biology","English","Hindi","Accounts","Economics",
    "Computer Science","Spoken English","French","German","Keyboard","Guitar","Vocal music",
    "Bharatanatyam","Kathak","Art & craft","Chess","Robotics","Coding","Abacus",
    "Skating","Swimming","Shadow teaching","NEET","JEE","Olympiads"
  ],

  areas: [
    "South Delhi","East Delhi","West Delhi","Dwarka","Rohini","Gurugram","Sohna Road",
    "DLF Phase 1–5","Noida","Greater Noida","Noida Extension","Indirapuram","Vaishali",
    "Vasundhara","Ghaziabad","Raj Nagar Extension","Faridabad","Ballabgarh"
  ],

  // TODO: replace with three real quotes. First name + role + locality is enough.
  quotes: [
    { t: "Placeholder — a parent, two lines: the subject, and how fast the tutor was arranged.",
      n: "Placeholder name", r: "Parent · Class 8 Maths · Noida", c: "#0E5C42" },
    { t: "Placeholder — a teacher, two lines: an assignment near home and being briefed first.",
      n: "Placeholder name", r: "Teacher · Physics · Ghaziabad", c: "#E0552F" },
    { t: "Placeholder — a school coordinator, two lines: turnaround on a shadow teacher role.",
      n: "Placeholder name", r: "Coordinator · CBSE school · Gurugram", c: "#3E7BC4" }
  ]
};

// Keep 6–10 live and refresh weekly. A stale board is worse than no board.
export const OPENINGS = [
  { ref:"T-2481", title:"Class 10 Maths & Science", cat:"School",    area:"Indirapuram, Ghaziabad", mode:"Home",   days:"3 days/week", pay:"₹8,000–10,000 /mo" },
  { ref:"T-2479", title:"Class 12 Physics (CBSE)",  cat:"Exam prep", area:"Sector 50, Noida",       mode:"Home",   days:"4 days/week", pay:"₹12,000–15,000 /mo" },
  { ref:"T-2476", title:"Keyboard & music basics",  cat:"Hobby",     area:"DLF Phase 3, Gurugram",  mode:"Home",   days:"2 days/week", pay:"₹6,000 /mo" },
  { ref:"T-2474", title:"Shadow teacher, Grade 3",  cat:"School",    area:"South Delhi",            mode:"School", days:"Full day",    pay:"₹22,000–26,000 /mo" },
  { ref:"T-2470", title:"Spoken English, adults",   cat:"Language",  area:"Online",                 mode:"Online", days:"Flexible",    pay:"₹500 /hour" },
  { ref:"T-2468", title:"Class 6 all subjects",     cat:"School",    area:"Vaishali, Ghaziabad",    mode:"Home",   days:"5 days/week", pay:"₹7,000 /mo" },
  { ref:"T-2465", title:"Summer art & craft batch", cat:"Hobby",     area:"Faridabad",              mode:"Centre", days:"3 weeks",     pay:"₹15,000 total" },
  { ref:"T-2461", title:"NEET Biology",             cat:"Exam prep", area:"Greater Noida",          mode:"Both",   days:"3 days/week", pay:"₹14,000 /mo" }
];
