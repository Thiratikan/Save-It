import React, { useState } from "react";
import { Form, Button } from "../styles/Style-Register";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <Form>
      <img src="./images/SaveItLogo.png" alt="" />
      <form onSubmit={submitHandler}>
        <h1>Sign In</h1>
        {error !== "" ? <div>{error}</div> : ""}
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <Button>
          <input type="submit" value="LOGIN" />
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
