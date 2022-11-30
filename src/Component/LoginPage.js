import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
  let navigate = useNavigate();

  const adminUser = {
    email: "cellyblue14@gmail.com",
    password: "1234",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div>
      {user.email !== "" ? (
        <div>
          <h1>
            Welcome, <span>{user.name}</span>
          </h1>
          <button
            onClick={() => {
              navigate("/DashBorad");
            }}
          >
            Next
          </button>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
