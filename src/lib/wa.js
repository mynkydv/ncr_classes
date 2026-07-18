import { CONFIG } from "../data/site";

export const waURL = (text) =>
  `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(text)}`;

export const WA_HELLO = "Hi NCR Classes, I have an enquiry.";

export const makeRef = (prefix) =>
  `NCR-${prefix}-${Math.floor(Math.random() * 9000) + 1000}`;

export function summarise(data, ref) {
  return (
    `New requirement ${ref}\n\n` +
    Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n")
  );
}
