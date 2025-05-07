import styled from 'styled-components';
import { device } from './theme';

const TechContainer = styled.section`
  width: 100%;
  padding: 128px 0;
  background: #0B24F5;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    padding: 100px 0;
  }

  @media ${device.mobile} {
    padding: 60px 16px;
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
    gap: 24px;
    max-width: 343px;
  }
`;

const TechTitle = styled.h2`
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;

  @media ${device.tablet} {
    font-size: 56px;
  }

  @media ${device.mobile} {
    font-size: 56px;
    text-align: center;
  }
`;

const TechSkills = styled.p`
  font-size: 32px;
  font-family: 'Hind', sans-serif;
  font-weight: 600;
  color: white;

  @media ${device.tablet} {
    font-size: 24px;
    text-align: center;
  }

  @media ${device.mobile} {
    font-size: 24px;
    text-align: left;
    max-width: 343px;}
`;

export default function Tech() {
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
}
