import { useState } from "react";

/**
 * Shows the image at /images/<src> if it exists.
 * If the file is missing, shows a hatched placeholder with shooting instructions.
 * Drop the file into public/images/ and it appears — no code change needed.
 */
export default function PhotoSlot({ src, alt, hint, ratio = "4/5", className = "", style }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className={`shot ${missing ? "empty" : ""} ${className}`.trim()}
         style={{ aspectRatio: ratio, ...style }}>
      <img src={`/images/${src}`} alt={alt} onError={() => setMissing(true)} />
      <div className="hint">
        <b>Photo slot — {src}</b>
        <span>{hint}</span>
      </div>
    </div>
  );
}
