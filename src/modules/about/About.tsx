import React from 'react'
import { StyledAbout, AboutWrapper, AboutBody } from './StyledAbout'
import { Container } from '../../components/styled/container/Container'
import { AboutPictures } from './components/pictures/AboutPictures'
import { AboutContent } from './components/content/AboutContent'

const About: React.FC = () => {
   return (
      <StyledAbout>
         <AboutWrapper>
            <Container>
               <AboutBody>
                  <AboutPictures />
                  <AboutContent />
               </AboutBody>
            </Container>
         </AboutWrapper>
      </StyledAbout>
   )
}

export default About
