import "@material/textfield/dist/mdc.textfield.css";
import React, { useState } from "react";
import "../Style/Search.css"; // Assuming you have the appropriate styles defined in Search.css

const Search = () => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (event) => {
    if (event.target.value === "") {
      setFocused(false);
    }
  };

  return (
    <>
      <label className="mdc-text-field mdc-text-field--filled">
        <span className="mdc-text-field__ripple"></span>
        <span
          className={`mdc-floating-label ${
            focused ? "mdc-floating-label--float-above" : ""
          }`}
          id="my-label-id"
        >
          Currency Value
        </span>
        <span
          className={`mdc-text-field__affix mdc-text-field__affix--prefix ${
            focused ? "mdc-text-field__affix--prefix-hidden" : ""
          }`}
        >
          $
        </span>
        <input
          className="mdc-text-field__input"
          type="text"
          aria-labelledby="my-label-id"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <span
          className={`mdc-text-field__affix mdc-text-field__affix--suffix ${
            focused ? "mdc-text-field__affix--suffix-hidden" : ""
          }`}
        >
          .00
        </span>
        <span className="mdc-line-ripple"></span>
      </label>
    </>
  );
};

export default Search;
