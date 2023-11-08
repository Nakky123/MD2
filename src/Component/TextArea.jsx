import React, { useState } from "react";
import "../Style/Search.css"; // Assuming you have the appropriate styles defined in Search.css

const TextArea = () => {
  return (
    <>
      <label class="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label">
        <span class="mdc-notched-outline">
          <span class="mdc-notched-outline__leading"></span>
          <span class="mdc-notched-outline__trailing"></span>
        </span>
        <input class="mdc-text-field__input" type="text" aria-label="Label" />
      </label>
    </>
  );
};

export default TextArea;
