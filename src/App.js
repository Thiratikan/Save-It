import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
import DashBorad from "./Component/drive/DashBorad";
import Drive from "./Component/drive/Drive";
import Login from "./Component/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashborad" element={<DashBorad />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
