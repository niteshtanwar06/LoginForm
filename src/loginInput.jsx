import React from "react";

function logininput(props) {
  return (
    <div className="field">
      <label htmlFor={props.labelfor}>{props.label}</label>
      <input
        id={props.inputId}
        name={props.inputName}
        type={props.inputType}
        placeholder={props.inputPlaceholder}
      />
    </div>
  );
}

export default logininput;
