import React, { useState, useEffect } from "react";
import "./navbar2.styles.scss";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';


const Navbar = ({ currentUser }) => {
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

  let location = useLocation();

  return (
  <nav className={scrollOffset >= 200 ? 'navbar navbar--shade' : 'navbar'}>
    <ul className="navbar__list">

      {location.pathname === '/' ? 
          <HashLink to="/#main" className="navbar__list-item navbar__brand">
            <li>Brand</li>
          </HashLink>
          :
          <Link to="/" className="navbar__list-item navbar__brand">
            <li>Brand</li>
          </Link>    
      }

      <Link to="/shop" className="navbar__list-item navbar__shop">
        <li >Vásárlás</li>
      </Link>      

      <HashLink to="/#about" className="navbar__list-item navbar__about">
        <li>Rólunk</li>
      </HashLink>     

      <HashLink to="/#contact" className="navbar__list-item navbar__contact"> 
        <li>Kapcsolat</li>
      </HashLink> 
      <CartIcon className="navbar__list-item"/>
      {
        currentUser ?
        <div className="navbar__list-item navbar__logout" onClick={()=> auth.signOut()}>Kijelentkezés</div>
        :
        <Link className="navbar__list-item navbar__login" to="/login">
        <li>Bejelentkezés</li>
        </Link>
      }

    </ul>
    <div className="hamburger-menu">
      <span className="hamburger-menu__bar"></span>
      <span className="hamburger-menu__bar"></span>
      <span className="hamburger-menu__bar"></span>
    </div>
  </nav>
  )
};

const mapStateToProps = ({user: { currentUser }}) => ({
  currentUser
})

export default connect(mapStateToProps)(Navbar);
