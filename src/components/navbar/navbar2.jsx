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
    <NavbarContainer visibility={visibility ? 1 : 0} scrollOffset={scrollOffset} width={width} location={location}>
      <NavbarListContainer>

        {location.pathname === "/" ? (
          <NavbarListItem gridarea="logo" as={HashLink} to="/#main">
            <NavbarIconContainer>
              <NavbarIcon />
              BM
            </NavbarIconContainer>
          </NavbarListItem>
        ) : (
          <NavbarListItem gridarea="logo" to="/">
            <NavbarIconContainer>
              <NavbarIcon />
              BM
            </NavbarIconContainer>
          </NavbarListItem>
        )}

        <NavbarListItem gridarea="shop" visibility={visibility ? 1 : 0} as={HashLink} to="/shop/#shop">
          <li>V??s??rl??s</li>
        </NavbarListItem>

        <NavbarListItem gridarea="about" visibility={visibility ? 1 : 0} as={HashLink} to="/#about">
          <li>R??lunk</li>
        </NavbarListItem>

        <NavbarListItem gridarea="contact" visibility={visibility ? 1 : 0} as={HashLink} to="/#contact">
          <li>Kapcsolat</li>
        </NavbarListItem>

        {currentUser ? (
          <NavbarListItem gridarea="login" visibility={visibility ? 1 : 0} as="div" onClick={() => auth.signOut()}>
            Kijelentkez??s
          </NavbarListItem>
        ) : (
          <NavbarListItem gridarea="login" visibility={visibility ? 1 : 0} to="/login">
            <li>Bejelentkez??s</li>
          </NavbarListItem>
        )}

        {hidden ? null : <CartDropDown />}
        <NavbarListItem gridarea="cart" as='div'>
          <CartIcon />
        </NavbarListItem>        
        <HamburgerMenu gridarea="hamburger" onClick={()=> setVisibility(!visibility)}>
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
