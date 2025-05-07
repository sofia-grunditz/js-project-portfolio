import styled from "styled-components";
import { device } from './theme.js';

const SquigglyContainer = styled.div`
  background-color: #fce4ec;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;

 /* Centrera den korrekt */

  @media ${device.tablet} {
    max-width: 1000px; /* Lite mindre på tablet */
  }

  @media ${device.mobile} {
    max-width: 90%; /* Gör den bredare på mobil */
  }
`;

const SquigglyLine = styled.img`
  width: 100%;
  height: auto;
  display: block; 
  object-fit: cover;

  @media ${device.tablet} {
    max-width: 1000px;
  }

  @media ${device.mobile} {
    max-width: 90%;
  }
`;

const SquigglyDivider = () => (
  <SquigglyContainer>
    <SquigglyLine src="/divider.svg" alt="Squiggly Divider" />
  </SquigglyContainer>
);

export default SquigglyDivider; 
