import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import * as AiIcons from "react-icons/ai";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div>
        <Link to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <img src="./images/SaveItLogo.png" alt="" />
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#">
              <AiIcons.AiOutlineClose />
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
    </>
  );
}

export default Navbar;
