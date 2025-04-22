import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #0B24F5;
`;

const ContentWrapper = styled.div`
  position: absolute;
  left: 234px;
  top: 128px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 128px;
`;

const Title = styled.div`
  width: 1044px;
  text-align: center;
  color: white;
  font-size: 80px;
  font-family: 'Montserrat';
  font-weight: 700;
  word-wrap: break-word;
`;

const SkillSections = styled.div`
  width: 1044px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const SkillHeader = styled.div`
  padding: 2px;
  background: ${(props) => props.bgColor || 'transparent'};
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const SkillTitle = styled.div`
  color: ${(props) => (props.textColor ? props.textColor : 'white')};
  font-size: 32px;
  font-family: 'Montserrat';
  font-weight: 600;
  word-wrap: break-word;
`;

const SkillList = styled.div`
  color: white;
  font-size: 18px;
  font-family: 'Hind';
  font-weight: 400;
  word-wrap: break-word;
`;

export default function Skills() {
  return (
    <Container>
      <ContentWrapper>
        <Title>Skills</Title>
        <SkillSections>
          <SkillContainer>
            <SkillHeader bgColor="#EB5577">
              <SkillTitle>Code</SkillTitle>
            </SkillHeader>
            <SkillList>HTML5<br />CSS3<br />Javascript ES6<br />React<br />Styled Components<br />GitHub<br />Markdown</SkillList>
          </SkillContainer>

          <SkillContainer>
            <SkillHeader bgColor="#2483E0">
              <SkillTitle>Toolbox</SkillTitle>
            </SkillHeader>
            <SkillList>Adobe Photoshop<br />Adobe Illustrator<br />Adobe FrameMaker<br />Oxygen<br />MadCap Flare<br />Slack<br />Teams<br />Confluence<br />Jira</SkillList>
          </SkillContainer>

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
            <SkillList>Photography<br />DITA<br />XML<br />Topic-based writing</SkillList>
          </SkillContainer>
        </SkillSections>
      </ContentWrapper>
    </Container>
  );
}
