import styled, { css } from "styled-components";
import { size, device } from "./navbar2.breakpoints"
import { Link } from 'react-router-dom';

const NavbarShade = css`
    background-color: #8E7C68;
    box-shadow: 0px 6px 10px black;
    z-index: 10;
`

const setNavbarShade = (props) => {
    if (props.scrollOffset >= 200 ) {
        return NavbarShade;
    } else {
        return null;
    }
}

const NavbarContainer = styled.nav`
    @media only screen and ${device.xs}{
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 75px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 500;  
        transition: background-color 0.8s ease;
        ${setNavbarShade}
    }

    @media only screen and ${device.sm}{
        display: block;
    }
`

const NavbarListContainer = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 10px 20px;
    margin: 0;
`

const NavbarListItem = styled(Link)`

    @media only screen and ${device.xs}{
        display: none;
        padding: 18px 14px;
        cursor: pointer;
        text-decoration: none;
        color: #DDC9BC;

        &:first-child {
            display: inline-block;
        }
    }

    @media only screen and ${device.sm}{
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
`

const HamburgerMenu = styled.div`
    @media only screen and ${device.xs}{
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;      
        justify-content: space-around;
        align-items: flex-end;
    }

    @media only screen and ${device.sm}{
        display: none;
    }

    @media only screen and ${device.lg}{
        display: none;
    }
`

const HamburgerMenuBar = styled.span`
    width: 40px;
    height: 6px;
    background-color: rgb(200, 200, 200);
    border-radius: 50px;
`

export { NavbarContainer, NavbarListContainer, NavbarListItem, HamburgerMenu, HamburgerMenuBar }