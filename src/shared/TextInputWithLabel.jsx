import { forwardRef } from "react";

const TextInputWithLabel = forwardRef(function TextInputWithLabel(
  { elementId, labelText, value, onChange },
  ref
) {
  return (
    <>
      <label htmlFor={elementId}>{labelText}</label>

      <input
        id={elementId}
        type="text"
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </>
  );
});

export default TextInputWithLabel;