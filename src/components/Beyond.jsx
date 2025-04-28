import BeyondCard from "./BeyondCard";
import beyondData from "../data/beyondData";
import styled from "styled-components";
import { device } from './theme.js';

const BeyondContainer = styled.section`
  background-color: #FFECEA;
  width: 100%;
  text-align: left;

  @media ${device.mobile} {
    padding: 40px 20px;
  }
`;
const SectionTitle = styled.h2`
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
    margin-bottom: 80px;
  }

  @media ${device.tablet} {
    font-size: 60px;
    margin-top: 120px;
  }
`;
const BeyondGrid = styled.div`
 width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Två per rad */
  gap: 32px;
  width: 100%;

  @media ${device.tablet} {
    grid-template-columns: 1fr; /* En per rad på tablet */
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr; /* En per rad på mobil */
  }
`;
const Beyond = () => {
  return (
    <BeyondContainer>
      <SectionTitle>Beyond the Code</SectionTitle>
      <BeyondGrid>
        {beyondData.map((item, index) => (
          <BeyondCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
            buttonType={item.buttonType}
          />
        ))}
      </BeyondGrid>
    </BeyondContainer>
  );
};

export default Beyond;
