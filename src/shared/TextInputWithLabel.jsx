function TextInputWithLabel({
  elementId,
  label,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={elementId}>{label}</label>

      <input
        id={elementId}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default TextInputWithLabel;