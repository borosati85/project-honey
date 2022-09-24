import styled, { css } from "styled-components";
import { size, device } from "../../common/breakpoints";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/honeycomb.svg";

const NavbarShadeOn = css`
  background-color: #8e7c68;
  box-shadow: 0px 6px 10px black;
  z-index: 10;
`;

const NavbarShadeOff = css`
  background-color: transparent;
`

const NavbarVisible = css`
  display: flex;
`

const NavbarHidden = css`
  display: none;
`

const NavbarExpanded = css`
  height: 450px;
  background-color: #8e7c68;
`

const NavbarCollapsed = css`
  height: 95px;
`

const setNavbarShade = ({ scrollOffset, width, visibility, location }) => {
  if (scrollOffset >= 200 || (width < 768 && !visibility) || location.pathname === '/login' || location.pathname === '/checkout' ) {
    return NavbarShadeOn;
  } else {
    return NavbarShadeOff;
  }
};

const getGridArea = (props) => {
  return css`
  grid-area: ${props.gridarea};
  `
}

const getVisibility = (props) => {
  if(props.visibility) {
    return NavbarHidden;
  } else {
    return NavbarVisible;
  }
}

const setNavbarHeight = (props) => {
  if(props.visibility) {
    return NavbarCollapsed;
  } else {
    return NavbarExpanded;
  }
}

const NavbarContainer = styled.nav`
  @media only screen and ${device.xs} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 500;
    transition: background-color 0.8s ease;
    ${setNavbarHeight};
    ${setNavbarShade}
  }
  @media only screen and ${device.m} {
    height: 95px;
  }
`;

const NavbarListContainer = styled.ul`
  @media only screen and ${device.xs} {
    height: 100%;
    width: 100%;
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
      "logo cart hamburger"
      "shop shop shop"
      "about about about"
      "contact contact contact"
      "login login login";
  }

  @media only screen and ${device.m} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavbarIconContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  font-family: "Waterfall", cursive;
  font-weight: 600;
  font-size: 30px;
`;

const NavbarIcon = styled(Icon)`
  width: 40px;
  height: 40px;
  filter: invert(100%) sepia(0%) saturate(2675%) hue-rotate(336deg)
    brightness(90%) contrast(70%);
`;

const NavbarListItem = styled(Link)`
  @media only screen and ${device.xs} {
    display: flex;
    justify-content: center;
    padding: 18px 14px;
    cursor: pointer;
    text-decoration: none;
    color: #ddc9bc;   
    ${getGridArea};
    ${getVisibility};


    &:first-child {
      display: inline-block;
    }

    &:nth-last-child(2) {      
      display: flex;
      justify-content: center;

      &:hover {
        border-bottom: none;
      }
    }   

  }

  @media only screen and ${device.m} {
    display: block;

    &:hover {
      color: white;
      border-bottom: 3px solid orange;
    }

    &:first-child {
      margin-right: auto;

      &:hover {
        border-bottom: none;
      }
    }  
  }
`;

const HamburgerMenu = styled.div`
  @media only screen and ${device.xs} {
    height: 70px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    ${getGridArea}
  }

  @media only screen and ${device.m} {
    display: none;
  }
`;

const HamburgerMenuBar = styled.span`
  width: 40px;
  height: 6px;
  background-color: rgb(200, 200, 200);
  border-radius: 50px;
`;

export {
  NavbarContainer,
  NavbarListContainer,
  NavbarListItem,
  HamburgerMenu,
  HamburgerMenuBar,
  NavbarIcon,
  NavbarIconContainer
};
