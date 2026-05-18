

function TextInputWithLabel({
  elementId,
  labelText,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={elementId}>{labelText}</label>

      <input
        id={elementId}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default TextInputWithLabel;