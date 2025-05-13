import BeyondCard from "./BeyondCard";
import beyondData from "../data/beyondData";
import styled from "styled-components";
import { device } from './theme.js';

const BeyondContainer = styled.section`
  background-color: #FFECEA;
  width: 100%;
  padding: 124px 0 60px;

  @media ${device.tablet} {
    padding: 100px 0 60px;
  }

  @media ${device.mobile} {
    padding: 60px 0 40px;
  }
`;

const BeyondWrapper = styled.div`
  max-width: 1044px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;

  @media ${device.tablet} {
    padding: 0 32px;
  }

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

const SectionTitle = styled.h2`
  color: #D5003C;
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-align: left;
  margin-bottom: 124px;
  padding-left: 0;

  @media ${device.tablet} {
    font-size: 60px;
    margin-bottom: 96px;
    text-align: left;
    margin-left: 0;
  }

  @media ${device.mobile} {
    font-size: 40px;
    text-align: center;
    margin: 0 auto 80px;
  }
`;

const BeyondGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 100%;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Beyond = () => {
  return (
    <BeyondContainer>
      <BeyondWrapper>
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
              source={item.source}
            />
          ))}
        </BeyondGrid>
      </BeyondWrapper>
    </BeyondContainer>
  );
};

export default Beyond;
