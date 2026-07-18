export function Field({ label, required, hint, children }) {
  return (
    <div className="f">
      <label>{label} {required && <b>*</b>}</label>
      {children}
      {hint && <small>{hint}</small>}
    </div>
  );
}

export function Input(props) { return <input {...props} />; }

export function Select({ options, placeholder, ...rest }) {
  return (
    <select {...rest}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  );
}

export function CheckRow({ name, options, defaultFirst = true }) {
  return (
    <div className="checks">
      {options.map((o, i) => (
        <label key={o}>
          <input type="checkbox" name={name} value={o} defaultChecked={defaultFirst && i === 0} />
          {o}
        </label>
      ))}
    </div>
  );
}
