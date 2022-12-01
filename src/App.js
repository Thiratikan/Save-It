import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
import DashBorad from "./Component/drive/DashBorad";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/DashBorad" element={<DashBorad />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
