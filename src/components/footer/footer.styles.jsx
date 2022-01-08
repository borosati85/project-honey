import styled from "styled-components";
import { device } from '../../common/breakpoints';

const FooterContainer = styled.div`
    @media only screen and ${device.xs} {
        display: flex;  
        flex-direction: column;
        justify-content: center;  
        align-items: flex-start;
        padding: 20px;
        background-color: #555;
        color: #DDC9BC;
    }
    @media only screen and ${device.m} {
        flex-direction: row;
        justify-content: space-around;
    }
`

const FooterColumn = styled.div`
    margin: 15px;
    width: 280px;
`

const IconContainer = styled.div`
    display: flex;
    gap: 10px;
    font-size: 30px;
`

export { FooterContainer, FooterColumn, IconContainer }