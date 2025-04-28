import styled from 'styled-components';
import { device } from "./theme.js";

const BeyondCardWrapper = styled.div`
  background-color: #FFECEA;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  width: 100%;
  box-sizing: border-box;

  &:nth-child(3) { /* Det sista kortet */
    justify-self: left; /* Centrerar kortet */
  }

  @media ${device.mobile} {
    grid-column: auto;
    padding: 0;
    padding-top: 20px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
  }
`;

const BeyondImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  margin-bottom: 15px;
`;

const BeyondContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  gap: 10px;
`;

const BeyondTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const BeyondDescription = styled.p`
  max-width: 600px;
  font-size: 1.2rem;
  color: #555;
  text-align: left;
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

const BeyondCard = ({ title, description, image, link, buttonType = "portfolio" }) => {
  return (
    <BeyondCardWrapper>
      <BeyondImage src={image} alt={title} />
      <BeyondContent>
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
