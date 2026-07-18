import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { waURL, WA_HELLO } from "../lib/wa";

const LINKS = [
  { to: "/find-a-tutor", label: "Find a tutor" },
  { to: "/join-as-tutor", label: "Become a tutor" },
  { to: "/for-schools", label: "For schools" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header>
      <div className="wrap hbar">
        <Link className="logo" to="/"><i>N</i><span>NCR Classes</span></Link>
        <nav className="desk">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "on" : "")}>
              {l.label}
            </NavLink>
          ))}
          {pathname === "/" && <a href="#how">How it works</a>}
        </nav>
        <a className="wa" href={waURL(WA_HELLO)} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.6 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.5-4-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.5l-.3.4c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 2 1.1.9 1.9 1.2 2.2 1.3.2.1.4.1.5-.1l.7-.9c.2-.2.3-.2.5-.1l1.8.9c.2.1.4.2.4.3.1.2.1.7-.1 1.2Z"/></svg>
          WhatsApp
        </a>
        <button className="burger" aria-expanded={open} aria-controls="drawer"
                onClick={() => setOpen((v) => !v)}>☰</button>
      </div>
      <div className="wrap">
        <div className={`drawer ${open ? "open" : ""}`} id="drawer">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      </div>
    </header>
  );
}
