import styled from 'styled-components';

const TickerContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 80px;
  background: #FF4575;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  bottom: 0;
  left: 0;
`;

const TickerText = styled.p`
  color: white;
  font-size: clamp(16px, 4vw, 26px); 
  font-family: 'Montserrat';
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  max-width: 90%;
  word-wrap: break-word;
`;
const TickerTape = () => {
  return (
    <TickerContainer>
      <TickerText>
        Sofia Grunditz · Technical Writer & Frontend Developer · Sofia Grunditz · Technical Writer & Frontend Developer ·
      </TickerText>
    </TickerContainer>
  );
};

export default TickerTape;