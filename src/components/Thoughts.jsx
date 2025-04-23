import styled from 'styled-components';
import { device } from './theme'; // Importera device från din theme.js

const ThoughtsSection = styled.section`
  background-color: #FFECEA;
  width: 100%;
  text-align: left;
`;

const Title = styled.h2`
  max-width: 1044px;
  margin: 0 auto;
  color: #FF4575;
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  text-align: left;
  margin-bottom: 124px;
  margin-top: 150px;
  
  @media ${device.mobile} {
    font-size: 40px;
    margin-top: 100px;
    margin-bottom: 80px; /* Minska avståndet på mobil */
  }
  
  @media ${device.tablet} {
    font-size: 60px;
    margin-top: 120px;
  }
`;

const ThoughtsContainer = styled.div`
  max-width: 1044px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
  
  @media ${device.mobile} {
    width: 100%; /* Full bredd på mobil */
    gap: 24px; /* Mindre gap på mobil */
  }
  
  @media ${device.tablet} {
    width: 95%; /* Justera bredden för tablet */
    gap: 48px; /* Mellanstort gap för tablet */
  }
`;

const ThoughtCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  width: 100%;
  
  @media ${device.mobile} {
    width: 100%; 
  }
`;

const ThoughtImage = styled.img`
  width: 100%;
  height: auto;
  background-color: #D9D9D9;
  border-left: 20px solid #FF4575;
  border-bottom: 20px solid #FF4575;
  display: block;
  margin-bottom: 40px;

  @media ${device.mobile} {
    width: 100%;
    height: auto; /* Behåll bildens förhållande */
  }
  
  @media ${device.tablet} {
    width: 90%; /* Bilden blir något mindre på tablet */
  }
`;

const ThoughtContent = styled.div`
  width: 100%; /* Justera bredden för att göra den responsiv */
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box; /* Se till att padding inte gör innehållet för brett */
  
  @media ${device.mobile} {
    width: 100%; /* Full bredd på mobil */
  }
`;
const DateTag = styled.div`
  display: inline-block;
  padding: 2px 6px;
  background: black;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  align-self: flex-start;
  white-space: nowrap;
  
  @media ${device.mobile} {
    font-size: 14px; /* Minska textstorleken på mobil */
  }
`;

const ThoughtTitle = styled.h3`
  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: black;
  width: 100%; /* Justera bredden till 100% för att undvika overflow */
  box-sizing: border-box;
  
  @media ${device.mobile} {
    font-size: 20px;
    width: 100%;
  }
  
  @media ${device.tablet} {
    font-size: 28px;
  }
`;

const ThoughtText = styled.p`
  font-size: 20px;
  font-family: 'Hind', sans-serif;
  font-weight: 400;
  color: black;
  line-height: 1.6;
  max-width: 100%; /* Gör texten flexibel */
  text-align: left;
  box-sizing: border-box; /* Se till att padding inte gör texten för bred */

  @media ${device.mobile} {
    font-size: 16px;
    padding: 0 15px; /* Lägg till padding så att texten inte går till kanten */
  }
  
  @media ${device.tablet} {
    font-size: 18px;
    padding: 0 20px; /* Lägg till padding för tablet */
  }
`;

const Thoughts = () => {
  return (
    <ThoughtsSection>
      <Title>My thoughts</Title>
      <ThoughtsContainer>
        <ThoughtCard>
          <ThoughtImage src="/images/imagethoughts.png" alt="Glass" />
          <ThoughtContent>
            <DateTag>April 2025</DateTag>
            <ThoughtTitle>BUILDING WORLDS WITH WORDS</ThoughtTitle>
            <ThoughtText>
              In my current role as a technical writer, I create configuration guides, system administration documentation, and technical tutorials that help users understand and navigate complex systems. I enjoy digging into technical details and turning them into content that’s clear, structured, and actually helpful—whether it's for IT pros or curious beginners.

              Beyond my day job, I’m also a writer in the more traditional sense. In 2016, I received a literary award for my fiction. Writing has been central to how I process the world and I’ve always loved building worlds with words—whether I’m writing a short story, or explaining how a server works - or now, coding websites into existence.

              My journey into web development grew out of a desire to combine content and interaction—to not just write about systems or software, but understand and build them. I’m currently expanding my skills in front-end development, learning how to create accessible, responsive interfaces and exploring how design and documentation can work together. Writing and web development may seem like different disciplines, but to me, they’re both about the same thing: structure, clarity, and storytelling.
            </ThoughtText>
          </ThoughtContent>
        </ThoughtCard>
      </ThoughtsContainer>
    </ThoughtsSection>
  );
};

export default Thoughts;
