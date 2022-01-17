import styled, { css } from "styled-components";
import background from "../../assets/hexbg.png";
import { device } from "../../common/breakpoints";

const AboutSection = styled.section`
  @media only screen and ${device.xs} {
    color: #ddc9bc;
    padding: 30px 20px;
    background: url("
    https://c4.wallpaperflare.com/wallpaper/812/1011/691/hive-honeycombs-hexagon-bright-wallpaper-preview.jpg
")
      no-repeat center center;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: multiply;
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
  text-shadow: 2px 2px #000000;
`;

const FlexContainer = styled.div`
  @media only screen and ${device.xs} {
    display: flex;
    flex-direction: column;
    //box-shadow: 0px 15px 40px black;
    width: 100%;
    gap: 50px;
  }
  @media only screen and ${device.xl} {
    width: 60%;
  }
`;

const rowReversedFlexStyle = css`
  flex-direction: row-reverse;
`;
const rowFlexStyle = css`
  flex-direction: row;
`;

const getFlexStyles = (props) => {
  return props.reversed ? rowReversedFlexStyle : rowFlexStyle;
};

const FlexRow = styled.div`
  @media only screen and ${device.xs} {
    display: flex;
    //flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  @media only screen and ${device.m} {
    //${getFlexStyles}
  }
`;

const FlexTextContainer = styled.div`
  @media only screen and ${device.xs} {
    width: 100%;
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and ${device.m} {
    width: 50%;
  }
`;

const FlexImage = styled.img`
  @media only screen and ${device.xs} {
    display: none;
  }

  @media only screen and ${device.m} {
    display: block;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export {
  AboutSection,
  AboutTitle,
  FlexContainer,
  FlexRow,
  FlexTextContainer,
  FlexImage
};
