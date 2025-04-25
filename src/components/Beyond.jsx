import BeyondCard from "./BeyondCard";
import beyondData from "../data/beyondData";
import styled from "styled-components";
import { device } from "./theme.js";
const BeyondContainer = styled.section`
  text-align: left;
  padding: 60px 234px;
  background-color: #FFECEA;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  

  @media ${device.mobile} {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  max-width: 1044px;  
  height: 100%;
  margin: 0 auto;
  color: #FF4575;
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  text-align: left;
  margin-bottom: 124px;
  margin-top: 150px;
`;

const BeyondGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 80%;
  max-width: 1200px;
  background-color: #FFECEA;
  padding: 20px;
  border-radius: 12px;
  justify-content: left;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
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
