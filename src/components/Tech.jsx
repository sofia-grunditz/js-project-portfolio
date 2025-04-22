import styled from 'styled-components';

const TechContainer = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0B24F5;
  margin-top: 200px; 
  @media (max-width: 745px) {
    min-height: 500px;
    margin-top: 100px;
  }

  @media (max-width: 376px) {
    min-height: 400px;
    padding: 20px;
    margin-top: 60px;
  }
`;

const TechContent = styled.div`
  width: 1044px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 124px;

  @media (max-width: 745px) {
    width: 680px;
    flex-direction: column;
    gap: 64px;
    align-items: flex-start;
  }

  @media (max-width: 376px) {
    width: 343px;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    text-align: center;
  }
`;

const TechTitle = styled.div`
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;

  @media (max-width: 745px) {
    font-size: 56px;
    text-align: center;
  }

  @media (max-width: 376px) {
    font-size: 56px;
    text-align: center;
    margin-top: 128px; 
  }
`;

const TechSkills = styled.div`
  flex: 1;
  font-size: 32px;
  font-family: 'Hind', sans-serif;
  font-weight: 600;
  color: white;

  @media (max-width: 745px) {
    font-size: 24px;
    text-align: center;
  }

  @media (max-width: 376px) {
    font-size: 24px;
    width: 343px;
    text-align: center;
    margin-top: 20px; 
  }
`;

export default function Tech() {
  return (
    <TechContainer>
      <TechContent>
        <TechTitle>Tech</TechTitle>
        <TechSkills>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs,
          mob-programming, pair-programming, GitHub.
        </TechSkills>
      </TechContent>
    </TechContainer>
  );
}