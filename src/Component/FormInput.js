import React, { useState } from "react";
import { Form } from "../styles/Style-Register";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocus(true);
  };

  return (
    <Form>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        // onBLur is when click element ouside the blur event
        // click outside it will clear
        onBlur={handleFocus}
        //onFocus is when click inside the ele
        // just one click
        onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
        focus={focus.toString()}
      />
      <span>{errorMessage}</span>
    </Form>
  );
};

export default FormInput;
