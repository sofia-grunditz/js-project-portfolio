import styled from 'styled-components';
import { device } from './theme';

const TechContainer = styled.section`
  width: 100%;
  height: 980px;
  background: #0B24F5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 234px;

  @media ${device.tablet} {
    height: auto;
    padding: 120px 32px;
    flex-direction: column;
  }

  @media ${device.mobile} {
    height: auto;
    padding: 80px 16px;
    flex-direction: column;
  }
`;

const TechContent = styled.div`
  display: flex;
  align-items: center;
  gap: 124px;
  max-width: 1044px;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 64px;
    max-width: 680px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 48px;
    max-width: 343px;
  }
`;

const TechTitle = styled.h2`
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;
  margin: 0;

  @media ${device.tablet} {
    font-size: 56px;
  }

  @media ${device.mobile} {
    font-size: 40px;
  }
`;

const TechSkills = styled.p`
  font-size: 32px;
  font-family: 'Hind', sans-serif;
  font-weight: 600;
  color: white;
  margin: 0;

  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 18px;
    max-width: 343px;
  }
`;

const Tech = () => {
  return (
    <TechContainer>
      <TechContent>
        <TechTitle>Tech</TechTitle>
        <TechSkills>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.
        </TechSkills>
      </TechContent>
    </TechContainer>
  );
};

export default Tech;
