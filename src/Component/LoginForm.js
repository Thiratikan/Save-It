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
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
            required
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
