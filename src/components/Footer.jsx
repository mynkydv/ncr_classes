import { Link } from "react-router-dom";
import { CONFIG } from "../data/site";
import { waURL, WA_HELLO } from "../lib/wa";

export default function Footer() {
  const pretty = `+${CONFIG.phone.slice(0, 2)} ${CONFIG.phone.slice(2, 7)} ${CONFIG.phone.slice(7)}`;
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="logo" style={{ marginBottom: 16, color: "#fff" }}>
              <i>N</i><span>NCR Classes</span>
            </div>
            <p style={{ maxWidth: "34ch", margin: 0 }}>
              Connecting parents, teachers and schools across Delhi NCR.
              Run by people, not an algorithm.
            </p>
            <div className="btnrow">
              <a className="btn btn--mark" style={{ fontSize: 15, padding: "12px 22px" }}
                 href={waURL(WA_HELLO)} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            </div>
          </div>
          <div>
            <h4>Get started</h4>
            <Link to="/find-a-tutor">Find a tutor</Link>
            <Link to="/join-as-tutor">Become a teacher</Link>
            <Link to="/for-schools">Hire teaching staff</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={waURL(WA_HELLO)} target="_blank" rel="noopener noreferrer">WhatsApp — {pretty}</a>
            <a href={`tel:+${CONFIG.phone}`}>Call — {pretty}</a>
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
            <a href={`https://instagram.com/${CONFIG.instagram}`} target="_blank" rel="noopener noreferrer">
              Instagram — @{CONFIG.instagram}
            </a>
          </div>
        </div>
        <div className="fbot">
          <span>© {new Date().getFullYear()} NCR Classes · Delhi NCR</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
