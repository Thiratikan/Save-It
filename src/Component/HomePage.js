import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Register />
      </div>
    </Container>
  );
}

export default HomePage;
