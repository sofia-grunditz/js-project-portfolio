import styled from "styled-components";
import { device } from "./theme.js";

const SquigglyContainer = styled.div`
  width: 100%;
  background-color: #ffecea;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const SquigglyLine = styled.img`
  width: 100%;
  height: auto;
  display: block;

  @media ${device.desktop} {
    max-width: 100%;
  }

  @media ${device.tablet} {
    max-width: 100%;
  }

  @media ${device.mobile} {
    max-width: 100%;
  }
`;

const SquigglyDivider = () => (
  <SquigglyContainer>
    <SquigglyLine src="/divider.svg" alt="Squiggly Divider" />
  </SquigglyContainer>
);

export default SquigglyDivider;
