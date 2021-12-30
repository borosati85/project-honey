import React from 'react';
import { FooterContainer, FooterColumn, IconContainer } from './footer.styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterestSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';


const Footer = () => (
    <FooterContainer>
        <FooterColumn>
            <h2>Kapcsolat</h2>
            <p>Kövess minket Facebookon, Instagramon, Twitteren. Megtalálsz minket Pinteresten és Youtube-on is.</p>
            <IconContainer>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterestSquare} />
                <FontAwesomeIcon icon={faYoutubeSquare} />
            </IconContainer>
        </FooterColumn>
        <FooterColumn>
            <h2>Fizetési módok</h2>
            <p>Oldalunkon bankkártyával illetve készpénzzel tudsz fizetni</p>
            <IconContainer>
                <FontAwesomeIcon icon={faCcMastercard} />
                <FontAwesomeIcon icon={faCcVisa} />
            </IconContainer>
        </FooterColumn>
    </FooterContainer>
)

export default Footer;