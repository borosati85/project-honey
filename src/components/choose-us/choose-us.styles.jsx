import styled from "styled-components";
import { device } from "../../common/breakpoints";

const ChooseUsContainer = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;

`

const ChooseUsTitle = styled.h2`
    font-family: "Pushster", cursive;
    font-weight: 400;
    font-size: calc(2vw + 35px);
    letter-spacing: 2px;
`

const ChooseUsImagesContainer = styled.div`
    @media only screen and ${device.xs} {
        display: flex;
        flex-direction: column;
        width: 80%;
    }
    @media only screen and ${device.m} {
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
    }
    @media only screen and ${device.lg} {
        width: 60%;
    }



`

const ChooseUsImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;

`

const ChooseUsImage = styled.img`

`

const ChooseUsText = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 700;
`

export { ChooseUsContainer, ChooseUsTitle, ChooseUsImagesContainer, ChooseUsImageContainer, ChooseUsImage, ChooseUsText }