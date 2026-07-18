import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FindTutor from "./pages/FindTutor";
import JoinTutor from "./pages/JoinTutor";
import ForSchools from "./pages/ForSchools";
import { waURL, WA_HELLO } from "./lib/wa";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-tutor" element={<FindTutor />} />
        <Route path="/join-as-tutor" element={<JoinTutor />} />
        <Route path="/for-schools" element={<ForSchools />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <a className="wa fixwa" href={waURL(WA_HELLO)} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" style={{ width: 17, height: 17, fill: "currentColor" }}>
          <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Z" />
        </svg>
        WhatsApp
      </a>
    </>
  );
}
