import React from "react";

const FormInput = (props) => {
  return (
    <div>
      <input ref={props.refer} placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
