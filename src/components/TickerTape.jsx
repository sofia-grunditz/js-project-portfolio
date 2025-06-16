import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const TickerContainer = styled.div`
  width: 100%;
  height: 114px;
  background: #c4003a;
  overflow: hidden;
  position: relative;
`;

const TickerTrack = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;
`;

const TickerText = styled.span`
  font-size: 26px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: white;
  padding-left: 13px;
  line-height: 114px; //
  display: inline-block;

  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 114px;
  }
`;

const TickerTape = () => {
  const message =
    "Sofia Grunditz · Technical Writer & Frontend Developer · Sofia Grunditz · Technical Writer & Frontend Developer · ";

  return (
    <TickerContainer>
      <TickerTrack>
        <TickerText>{message}</TickerText>
        <TickerText>{message}</TickerText>
      </TickerTrack>
    </TickerContainer>
  );
};

export default TickerTape;
