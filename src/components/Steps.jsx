export default function Steps({ items, className = "" }) {
  return (
    <ol className={`steps ${className}`.trim()}>
      {items.map((s) => (
        <li key={s.title}>
          <div>
            <b>{s.title}</b>
            <span>{s.body}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
