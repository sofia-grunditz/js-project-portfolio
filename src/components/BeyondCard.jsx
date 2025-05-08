import styled from 'styled-components';
import { device } from "./theme.js";

const BeyondCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  width: 100%;

  @media ${device.mobile} {
    align-items: center; 
  }
`;

const BeyondImage = styled.img`
  width: 100%;
  height: auto;
`;

const BeyondContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-align: left;

  @media ${device.mobile} {
    align-items: flex-start; 
    text-align: left;
  }
`;

const DateTag = styled.div`
  display: inline-block;
  padding: 2px 6px;
  background: black;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

const BeyondTitle = styled.h3`
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: black;
`;

const BeyondDescription = styled.p`
  font-size: 18px;
  font-family: 'Hind', sans-serif;
  font-weight: 400;
  color: black;
`;

const BeyondLink = styled.a`
  color: #ff4081;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;


const BeyondCard = ({ title, description, image, link, buttonType = "portfolio", source }) => {
  return (
    <BeyondCardWrapper>
      <BeyondImage src={image} alt={title} />
      <BeyondContent>
        {source && <DateTag>{source}</DateTag>}
        <BeyondTitle>{title}</BeyondTitle>
        <BeyondDescription>{description}</BeyondDescription>
        {link && (
          <BeyondLink href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={buttonType === "article" ? "/readarticle.svg" : "/ViewPortfolio.svg"}
              alt={buttonType === "article" ? "Read Article" : "View Portfolio"}
            />
          </BeyondLink>
        )}

      </BeyondContent>
    </BeyondCardWrapper>
  );
};

export default BeyondCard;
