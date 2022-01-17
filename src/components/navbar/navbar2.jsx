import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
  NavbarContainer,
  NavbarIcon,
  NavbarIconContainer,
  NavbarListContainer,
  NavbarListItem,
  HamburgerMenu,
  HamburgerMenuBar
} from "./navbar2.styles";

const Navbar = ({ currentUser, hidden }) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [width, setInnerWIdth] = useState(window.innerWidth);
  const [visibility, setVisibility] = useState(true);

  const handleScroll = (event) => {
    setScrollOffset((prevState) => window.pageYOffset);
  };

  const handleResize = (event) => {
    if (!visibility && event.target.innerWidth > 768) setVisibility(true);
    setInnerWIdth((prevState) => event.target.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let location = useLocation();

  return (
    <NavbarContainer visibility={visibility} scrollOffset={scrollOffset} width={width}>
      <NavbarListContainer>

        {location.pathname === "/" ? (
          <NavbarListItem gridArea="logo" as={HashLink} to="/#main">
            <NavbarIconContainer>
              <NavbarIcon />
              BM
            </NavbarIconContainer>
          </NavbarListItem>
        ) : (
          <NavbarListItem gridArea="logo" to="/">
            <NavbarIconContainer>
              <NavbarIcon />
              BM
            </NavbarIconContainer>
          </NavbarListItem>
        )}

        <NavbarListItem gridArea="shop" visibility={visibility} as={HashLink} to="/shop/#shop">
          <li>Vásárlás</li>
        </NavbarListItem>

        <NavbarListItem gridArea="about" visibility={visibility} as={HashLink} to="/#about">
          <li>Rólunk</li>
        </NavbarListItem>

        <NavbarListItem gridArea="contact" visibility={visibility} as={HashLink} to="/#contact">
          <li>Kapcsolat</li>
        </NavbarListItem>

        {currentUser ? (
          <NavbarListItem gridArea="login" visibility={visibility} as="div" onClick={() => auth.signOut()}>
            Kijelentkezés
          </NavbarListItem>
        ) : (
          <NavbarListItem gridArea="login" visibility={visibility} to="/login">
            <li>Bejelentkezés</li>
          </NavbarListItem>
        )}

        {hidden ? null : <CartDropDown />}
        <NavbarListItem gridArea="cart" as='div'>
          <CartIcon />
        </NavbarListItem>        
        <HamburgerMenu gridArea="hamburger" onClick={()=> setVisibility(!visibility)}>
        <HamburgerMenuBar />
        <HamburgerMenuBar />
        <HamburgerMenuBar />
      </HamburgerMenu>
      </NavbarListContainer>
    </NavbarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);
