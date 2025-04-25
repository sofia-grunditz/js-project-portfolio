import styled from 'styled-components';
import { device } from './theme.js';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #0B24F5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media ${device.mobile} {
    padding-top: 80px!important; 
    padding-bottom: 80px!important; }
`;

const Title = styled.div`
width: 1044px; /* Fixerad bredd */
  max-width: 90%; /* Säkerhetsåtgärd så att den inte blir för stor */
  text-align: center;
  color: white;
  font-size: 80px;
  font-family: 'Montserrat';
  font-weight: 700;
  word-wrap: break-word;
  display: block; /* Gör den mer stabil */
  margin: 0 auto; /* Centrerar rubriken korrekt */
  margin-bottom: 128px;

  @media ${device.tablet} {
    font-size: 56px;
    width: 90%;
    margin-bottom: 96px;
  }

  @media ${device.mobile} {
    font-size: 40px;
    width: 90%;
    margin-bottom: 64px;
    margin-top: 64px;
  }
`;

const SkillSections = styled.div`
width: 100%;
  max-width: 1044px; /* Säkerställer att det inte överstiger skärmens bredd */
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Fyra kolumner på stora skärmar */
  gap: 32px;
  justify-items: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr); /* Två per rad på tablet */
    width: 90%; /* Anpassa bredden så att allt får plats */
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr); /* En per rad på mobil */
    width: 90%; /* Säkerställa att innehållet får plats */
  }
`;

const SkillContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Gör att bredden följer sin föräldra-container */
  max-width: 250px; /* Fixerad bredd på större skärmar */

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const SkillHeader = styled.div`
  padding: 8px;
  background: ${(props) => props.bgColor || 'transparent'};
  display: inline-flex; /* Ändra från flex till inline-flex */
  align-items: center;
  justify-content: center;
  width: fit-content; /* Gör så att bredden anpassas efter innehållet */
`;

const SkillTitle = styled.div`
  color: ${(props) => (props.textColor ? props.textColor : 'white')};
  font-size: 24px;
  font-family: 'Montserrat';
  font-weight: 600;
`;

const SkillList = styled.div`
  text-align: center;
  color: white;
  font-size: 18px;
  font-family: 'Hind';
  font-weight: 400;
  word-wrap: break-word;
  overflow: hidden;
  width: 100%;

  @media ${device.mobile} {
    font-size: 16px;
    width: 95%;
    padding: 8px;
  }
`;

export default function Skills() {
  return (
    <Container>
      <Title>Skills</Title>
      <SkillSections>
        <SkillContainer>
          <SkillHeader bgColor="#EB5577">
            <SkillTitle>Code</SkillTitle>
          </SkillHeader>
          <SkillList>HTML5<br />CSS3<br />Javascript ES6<br />React<br />Styled Components<br />GitHub</SkillList>
        </SkillContainer>

        <SkillContainer>
          <SkillHeader bgColor="#2483E0">
            <SkillTitle>Toolbox</SkillTitle>
          </SkillHeader>
          <SkillList>Adobe Photoshop<br />Adobe Illustrator<br />Adobe FrameMaker<br />Oxygen<br />MadCap Flare<br />Slack<br />Teams<br />Confluence<br />Jira</SkillList>        </SkillContainer>

        <SkillContainer>
          <SkillHeader bgColor="#6DB486">
            <SkillTitle>Upcoming</SkillTitle>
          </SkillHeader>
          <SkillList>Node.js</SkillList>
        </SkillContainer>

        <SkillContainer>
          <SkillHeader bgColor="#FFDE30">
            <SkillTitle textColor="#0B24F5">More</SkillTitle>
          </SkillHeader>
          <SkillList>Photography<br />DITA<br />XML<br />Topic-based Writing</SkillList>
        </SkillContainer>
      </SkillSections>
    </Container>
  );
}
