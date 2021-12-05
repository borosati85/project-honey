import React, { useState, useEffect } from "react";
import "./navbar2.styles.scss";

const Navbar = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = (event) => {
    setScrollOffset (prevState => window.pageYOffset)
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);

    return (() => {
      window.removeEventListener('scroll', handleScroll);
    })
  }, [])

  return (
  <nav className={scrollOffset >= 200 ? 'navbar navbar--shade' : 'navbar'}>
    <ul className="navbar__list">
      <li className="navbar__list-item navbar__brand">Brand</li>
      <li className="navbar__list-item navbar__shop">Vásárlás</li>
      <li className="navbar__list-item navbar__about">Rólunk</li>
      <li className="navbar__list-item navbar__contact">Kapcsolat</li>
      <li className="navbar__list-item navbar__login">Bejelentkezés</li>
    </ul>
    <div className="hamburger-menu">
      <span className="hamburger-menu__bar"></span>
      <span className="hamburger-menu__bar"></span>
      <span className="hamburger-menu__bar"></span>
    </div>
  </nav>
  )
};

export default Navbar;
