import BeyondCard from "./BeyondCard";
import beyondData from "../data/beyondData";
import styled from "styled-components";
import { device } from './theme.js';

const BeyondContainer = styled.section`
  background-color: #FFECEA;
  width: 100%;
  text-align: left;
  padding: 100px 20px 60px;

  @media ${device.mobile} {
    padding: 60px 15px 40px;
  }
`;
const SectionTitle = styled.h2`
  max-width: 1044px;
  margin: 0 auto 124px;
  color: #FF4575;
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  text-align: left;

  @media ${device.mobile} {
    font-size: 40px;
    margin-bottom: 80px;
  }

  @media ${device.tablet} {
    font-size: 60px;
  }
`;

const BeyondGrid = styled.div`
  max-width: 1044px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 100%;
  padding: 0 20px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr; 
    padding: 0 15px;
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
