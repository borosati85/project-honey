import React from "react";
import hexagon1 from '../../assets/hexagon1.png';
import hexagon2 from '../../assets/hexagon2.png';
import hexagon3 from '../../assets/hexagon3.png';
import { ChooseUsContainer, ChooseUsTitle, ChooseUsImagesContainer, ChooseUsImageContainer, ChooseUsImage, ChooseUsText } from "./choose-us.styles";

const ChooseUs = () => (
    <ChooseUsContainer>
        <ChooseUsTitle>Miért válassz minket ?</ChooseUsTitle>
        <ChooseUsImagesContainer>
            <ChooseUsImageContainer>
                <ChooseUsImage src={hexagon1}/>
                <ChooseUsText>Prémium minőség</ChooseUsText>
            </ChooseUsImageContainer>
            <ChooseUsImageContainer>
                <ChooseUsImage src={hexagon2}/>
                <ChooseUsText>Gondosan tenyésztett méhek</ChooseUsText>
            </ChooseUsImageContainer>
            <ChooseUsImageContainer>
                <ChooseUsImage src={hexagon3}/>
                <ChooseUsText>Természetes környezet</ChooseUsText>
            </ChooseUsImageContainer>
        </ChooseUsImagesContainer>
    </ChooseUsContainer>
)

export default ChooseUs;