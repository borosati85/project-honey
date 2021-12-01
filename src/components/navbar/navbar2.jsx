import React from "react";
import "./navbar2.styles.scss";

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar__list">
      <li className="navbar__list-item">Brand</li>
      <li className="navbar__list-item">Vásárlás</li>
      <li className="navbar__list-item">Rólunk</li>
      <li className="navbar__list-item">Kapcsolat</li>
      <li className="navbar__list-item">Bejelentkezés</li>
    </ul>
    <div className="hamburger-menu">
      <span className="hamburger-menu__bar"></span>
      <span className="hamburger-menu__bar"></span>
      <span className="hamburger-menu__bar"></span>
    </div>
  </nav>
);

export default Navbar;
