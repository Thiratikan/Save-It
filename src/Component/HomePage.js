import { useState } from "react";
import Login from "./LoginPage";
import Register from "./Register";
import { TopTab } from "../styles/Style-Register";

function HomePage() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <TopTab>
      <div className="container">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Sign In
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Sign Up
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
      </div>
    </TopTab>
  );
}

export default HomePage;
