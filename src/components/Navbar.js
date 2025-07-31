import React from "react";
import "./css/Navbar.css";



const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src="/logo.png" alt="Sleepwalker Entertainment" />
    </div>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="/interviews">Interviews</a></li>
    </ul>
  </nav>
);

export default Navbar;