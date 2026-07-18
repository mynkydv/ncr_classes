import { Link } from "react-router-dom";

export default function PageHead({ crumb, title, lede, blob }) {
  return (
    <div className="phead">
      {blob && <div className={`blob ${blob}`} style={{ opacity: 0.35 }} />}
      <div className="wrap">
        <div className="crumb"><Link to="/">NCR Classes</Link> / {crumb}</div>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </div>
  );
}
