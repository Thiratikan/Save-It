import React, { useState } from "react";
import LoginForm from "./LoginForm";

function Login() {
  const adminUser = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };
  const Logout = () => {
    console.log("Logout");
  };
  return (
    <div>
      {user.email !== "" ? (
        <div>
          <h1>
            Welcome, <span>{user.name}</span>
          </h1>
          <button>Next</button>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default Login;
