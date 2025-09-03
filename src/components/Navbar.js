import React from "react";
import "./css/Navbar.css";



const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <a href="/">
      <img src="/logo.png" alt="Sleepwalker Entertainment" />
      </a>
    </div>
    <ul>
      {/* Add a Mixes, just use the home page for now */}
      <li><a href="/mixes">Mixes</a></li>
      <li><a href="/interviews">Interviews</a></li>
    </ul>
  </nav>
);

export default Navbar;