import styled, { css } from "styled-components";
import background from "../../assets/hexbg.png";
import { device } from '../../common/breakpoints';

const AboutSection = styled.section`
  @media only screen and ${device.xs} {
    padding: 30px 20px;
    background-color: #555;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  }
  @media only screen and ${device.sm} {
    padding: 60px 40px;
  }
`;

const AboutTitle = styled.h1`
  font-family: "Pushster", cursive;
  font-weight: 400;
  font-size: calc(2vw + 35px);
  letter-spacing: 2px;
  color: white;
  text-shadow: 2px 2px #000000;
`;

const FlexContainer = styled.div`
  @media only screen and ${device.xs} {
    display: flex;
    flex-direction: column;
    //box-shadow: 0px 15px 40px black;  
    width: 100%;
  }
  @media only screen and ${device.xl} {
    width: 60%;
  }
`

const rowReversedFlexStyle = css`
  flex-direction: row-reverse
`
const rowFlexStyle = css`
  flex-direction: row;
`

const getFlexStyles = props => {
  return props.reversed ?
  rowReversedFlexStyle
  : rowFlexStyle
}

const FlexRow = styled.div`
  @media only screen and ${device.xs} {
    display: flex;
    flex-direction: column;
    justify-content: center;    
  }

  @media only screen and ${device.m} {
    ${getFlexStyles}
  }
`

const FlexTextContainer = styled.div`
  @media only screen and ${device.xs} {
    width: 100%;
    //background-color: rgba(0, 0, 0, 0.4);
    color: white;
    padding: 5px 20px;
  }
  @media only screen and ${device.m} {
    width: 50%;
  }
`

const FlexImage = styled.img`
  @media only screen and ${device.xs} {
    width: 100%;
    height: auto;
  }
  @media only screen and ${device.m} {
    width: 50%;
  }
`

export { AboutSection, AboutTitle, FlexContainer, FlexRow, FlexTextContainer, FlexImage };
