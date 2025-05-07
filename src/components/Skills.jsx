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
    padding-bottom: 80px!important;
  }
`;

const Title = styled.div`
  width: 1044px;
  max-width: 90%;
  text-align: center;
  color: white;
  font-size: 80px;
  font-family: 'Montserrat';
  font-weight: 700;
  word-wrap: break-word;
  display: block;
  margin: 0 auto;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;
  max-width: 1044px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 48px;
    column-gap: 48px;
    padding: 0 24px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    row-gap: 40px;
    padding: 0 20px;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  @media ${device.mobile} {
    align-items: center;
  }
`;


const SkillHeader = styled.div`
  padding: 8px 12px;
  background: ${(props) => props.$bgColor || 'transparent'};
  border-radius: 4px;
  margin-bottom: 12px;
`;

const SkillTitle = styled.h3`
  color: ${(props) => props.$textColor || 'white'};
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 16px;
  font-family: 'Hind', sans-serif;
  font-weight: 400;
  text-align: left;

  & > li {
    margin-bottom: 4px;
  }

  @media ${device.mobile} {
    text-align: center;
  }
`;

export default function Skills() {
  return (
    <Container>
      <Title>Skills</Title>
      <SkillSections>
        <SkillContainer>
          <SkillHeader $bgColor="#EB5577">
            <SkillTitle>Code</SkillTitle>
          </SkillHeader>
          <SkillList>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>GitHub</li>
          </SkillList>
        </SkillContainer>

        <SkillContainer>
          <SkillHeader $bgColor="#2483E0">
            <SkillTitle>Toolbox</SkillTitle>
          </SkillHeader>
          <SkillList>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe FrameMaker</li>
            <li>Oxygen</li>
            <li>MadCap Flare</li>
            <li>Slack</li>
            <li>Teams</li>
            <li>Confluence</li>
            <li>Jira</li>
          </SkillList>
        </SkillContainer>

        <SkillContainer>
          <SkillHeader $bgColor="#397A5E">
            <SkillTitle>Upcoming</SkillTitle>
          </SkillHeader>
          <SkillList>
            <li>Node.js</li>
          </SkillList>
        </SkillContainer>

        <SkillContainer>
          <SkillHeader $bgColor="#FFDE30">
            <SkillTitle $textColor="#0B24F5">More</SkillTitle>
          </SkillHeader>
          <SkillList>
            <li>Photography</li>
            <li>DITA</li>
            <li>XML</li>
            <li>Topic-based Writing</li>
          </SkillList>
        </SkillContainer>
      </SkillSections>
    </Container>
  );
}
