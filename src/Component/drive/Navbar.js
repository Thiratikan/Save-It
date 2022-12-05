import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import * as AiIcons from "react-icons/ai";
import { NavTopBar, NavSideBar } from "../../styles/Style-Dashboard";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <NavTopBar>
        <Link to="#" className="menu-bar">
          <FaIcons.FaBars onClick={showSidebar} className="bar" />
        </Link>
        <img src="./images/SaveItLogoWhite.png" alt="" />
      </NavTopBar>
      <NavSideBar>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar}>
            <li>
              <Link to="#">
                <AiIcons.AiOutlineClose className="Closebar" />
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </NavSideBar>
    </>
  );
}

export default Navbar;
