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
  const [visibility, setVisibility] = useState(false);

  const handleScroll = (event) => {
    setScrollOffset((prevState) => window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let location = useLocation();

  return (
    <NavbarContainer scrollOffset={scrollOffset}>
      <NavbarListContainer>

        {location.pathname === "/" ? (
          <NavbarListItem as={HashLink} to="/#main">
            <NavbarIconContainer>
              <NavbarIcon />
              BM
            </NavbarIconContainer>
          </NavbarListItem>
        ) : (
          <NavbarListItem to="/">
            <NavbarIconContainer>
              <NavbarIcon />
              BM
            </NavbarIconContainer>
          </NavbarListItem>
        )}

        <NavbarListItem visibility={visibility} to="/shop">
          <li>Vásárlás</li>
        </NavbarListItem>

        <NavbarListItem visibility={visibility} as={HashLink} to="/#about">
          <li>Rólunk</li>
        </NavbarListItem>

        <NavbarListItem visibility={visibility} as={HashLink} to="/#contact">
          <li>Kapcsolat</li>
        </NavbarListItem>

        {currentUser ? (
          <NavbarListItem visibility={visibility} as="div" onClick={() => auth.signOut()}>
            Kijelentkezés
          </NavbarListItem>
        ) : (
          <NavbarListItem visibility={visibility} to="/login">
            <li>Bejelentkezés</li>
          </NavbarListItem>
        )}

        {hidden ? null : <CartDropDown />}
        <NavbarListItem as={CartIcon} />
        <HamburgerMenu onClick={()=> setVisibility(!visibility)}>
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
