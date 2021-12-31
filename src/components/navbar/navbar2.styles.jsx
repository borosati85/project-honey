import styled, { css } from "styled-components";
import { size, device } from "./navbar2.breakpoints";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/honeycomb.svg";

const NavbarShade = css`
  background-color: #8e7c68;
  box-shadow: 0px 6px 10px black;
  z-index: 10;
`;

const setNavbarShade = (props) => {
  if (props.scrollOffset >= 200) {
    return NavbarShade;
  } else {
    return null;
  }
};

const NavbarContainer = styled.nav`
  @media only screen and ${device.xs} {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 95px;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 500;
    transition: background-color 0.8s ease;
    ${setNavbarShade}
  }

  @media only screen and ${device.sm} {
    display: block;
  }
`;

const NavbarListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 10px 20px;
  margin: 0;
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
    display: none;
    padding: 18px 14px;
    cursor: pointer;
    text-decoration: none;
    color: #ddc9bc;

    &:first-child {
      display: inline-block;
    }
  }

  @media only screen and ${device.sm} {
    display: block;

    &:hover {
      color: white;
      border-bottom: 3px solid orange;
    }

    &:first-child {
      margin-right: auto;
    }

    &:last-child {
      margin-left: auto;
      border: 1px solid white;

      &:hover {
        background-color: rgba(255, 166, 0, 0.7);
      }
    }
  }
`;

const HamburgerMenu = styled.div`
  @media only screen and ${device.xs} {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }

  @media only screen and ${device.sm} {
    display: none;
  }

  @media only screen and ${device.lg} {
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
