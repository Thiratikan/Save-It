import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/LoginPage";
import Register from "./Component/RegisterPage";

function App() {
  return (
    <>
      <Login />;
      <Register />
    </>
  );
}

export default App;
