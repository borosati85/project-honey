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
import { selectCurrentUser } from '../../redux/user/user.selectors';
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
          <NavbarListItem as={HashLink} to="/#main">
            <li>Brand</li>
          </NavbarListItem>
          :
          <NavbarListItem to="/">
            <li>Brand</li>
          </NavbarListItem>    
      }

      <NavbarListItem to="/shop">
        <li >Vásárlás</li>
      </NavbarListItem>      

      <NavbarListItem as={HashLink} to="/#about">
        <li>Rólunk</li>
      </NavbarListItem>     

      <NavbarListItem as={HashLink} to="/#contact"> 
        <li>Kapcsolat</li>
      </NavbarListItem>           

      {
        currentUser ?
        <NavbarListItem as='div' onClick={()=> auth.signOut()}>Kijelentkezés</NavbarListItem>
        :
        <NavbarListItem to="/login">
        <li>Bejelentkezés</li>
        </NavbarListItem>
      }

      <NavbarListItem as={CartIcon}/>  

      {
          hidden ? null : <CartDropDown/>
      }

    </NavbarListContainer>
    <HamburgerMenu>
      <HamburgerMenuBar/>
      <HamburgerMenuBar/>
      <HamburgerMenuBar/>
    </HamburgerMenu>
  </NavbarContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);
