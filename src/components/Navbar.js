import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import profileImg from "../assets/img/rinor.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState("");

  const profileContainer = () => {
    return (
      <div className="profile">
        <img src={profileImg} alt="profile" />
        <h4>Rinor Jahaj</h4>
        <span>Some text</span>
      </div>
    );
  };

  const handleLeave = () => {
    return setIsOpen("");
  };

  const handleHover = () => {
    return setIsOpen(profileContainer());
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-elem">
          <li>
            <Link to="/" onMouseOver={handleHover} onMouseLeave={handleLeave}>
              My Profile
              {isOpen}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
