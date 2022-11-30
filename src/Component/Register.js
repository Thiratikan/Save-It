import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Button } from "../styles/Style-Register";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and should not include spaacial characters.",
      label: "Username: ",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "It should be email address.",
      label: "Email: ",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and including at least 1 character, 1 number, and 1 special character.",
      label: "Password: ",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Password doens't match.",
      label: "Confirm Password: ",
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    // when chilck to submit the page it will refreash the page so to prevent it just write preventDefault
    e.preventDefault();
  };

  const onChange = (e) => {
    // for each taeget name (taget.name) will update its name by using value (target.value)
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <Form>
      <img src="./images/SaveItLogo.png" alt="" />
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button>
          <button>Submit</button>
        </Button>
      </form>
    </Form>
  );
}

export default Register;
