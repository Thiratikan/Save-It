import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/LoginPage";
import Register from "./Component/Register";
import { Tap } from "./styles/Style-Register";

function App() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <Tap>
      <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
      >
        Login
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        Register
      </button>

      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <Login />
      </div>
      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <Register />
      </div>
    </Tap>
  );
}

export default App;
