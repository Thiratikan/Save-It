import React, { useState, useRef, useEffect } from "react";
import FormInput from "./FormInput";
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
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];
  const handleSubmit = (e) => {
    // when chilck to submit the page it will refreash the page so to prevent it just write preventDefault
    e.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FormInput placeholder="Username" />

        <button>Submit</button>
      </form>
    </section>
  );
}

export default Register;
