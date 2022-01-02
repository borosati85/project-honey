import React from 'react';
import { AboutSection, AboutTitle, FlexContainer, FlexRow, FlexTextContainer, FlexImage } from './about-page.styles';
import beekeepers from '../../assets/beekeepers.jpg';
import bees from '../../assets/bees.jpg';
import bees2 from '../../assets/bees2.jpg';


const AboutPage = () => (
    <AboutSection id="about">
      <AboutTitle>
        <span className="about__title__first-letter">R</span>
        <span>ólunk</span>
      </AboutTitle>
      <FlexContainer>
        <FlexRow>
          <FlexTextContainer>
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta reprehenderit dolor saepe quam laudantium blanditiis dolore dolores perspiciatis quia commodi eligendi pariatur ut aspernatur quisquam, quaerat suscipit doloremque. Deserunt!</p>
          </FlexTextContainer>
          <FlexImage src={bees} alt='bees'/>
        </FlexRow>
        <FlexRow reversed> 
          <FlexTextContainer>
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores tenetur ea odit nostrum est sunt? Voluptatum maxime voluptatibus at distinctio, delectus harum accusantium veniam dicta reprehenderit, atque suscipit doloribus architecto!</p>
          </FlexTextContainer> 
          <FlexImage src={beekeepers}/>        
        </FlexRow>
        <FlexRow>
          <FlexTextContainer>
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In corporis sit maxime necessitatibus, reprehenderit dignissimos debitis fugiat dolor recusandae officia laboriosam doloribus voluptates beatae minus eos porro repellendus! Incidunt, est?</p>
          </FlexTextContainer>
          <FlexImage src={bees2}/>
        </FlexRow>
      </FlexContainer>
    </AboutSection>
)

export default AboutPage;