import React, { useState, useEffect } from "react";
import "./navbar2.styles.scss";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from "reselect";
import selectCurrentUser from '../../redux/user/user.selectors';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { NavbarContainer, NavbarListContainer, NavbarListItem, HamburgerMenu, HamburgerMenuBar } from './navbar2.styles';


const Navbar = ({ currentUser, hidden }) => {
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
  <NavbarContainer scrollOffset={scrollOffset}>
    <NavbarListContainer>

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

      {
        currentUser ?
        <div className="navbar__list-item navbar__logout" onClick={()=> auth.signOut()}>Kijelentkezés</div>
        :
        <Link className="navbar__list-item navbar__login" to="/login">
        <li>Bejelentkezés</li>
        </Link>
      }

      <CartIcon className="navbar__list-item cart-icon"/>  

      {
          hidden ? null : <CartDropDown/>
      }

    </NavbarListContainer>
    <div className="hamburger-menu">
      <span className="hamburger-menu__bar"></span>
      <span className="hamburger-menu__bar"></span>
      <span className="hamburger-menu__bar"></span>
    </div>
  </NavbarContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);
