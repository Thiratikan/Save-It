import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
import Drive from "./Component/drive/Drive";
import Login from "./Component/Login";
import DashBorad from "./Component/drive/DashBorad";
import Profile from "./Component/Profile";
import UpdateProfile from "./Component/UpdateProfile";
import ForgotPassword from "./Component/ForgotPassword";

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
          <Route path="/signup" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
