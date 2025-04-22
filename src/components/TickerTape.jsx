import styled from 'styled-components';

const TickerContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #FF4575;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
  left: 0;
`;

const TickerText = styled.div`
  color: white;
  font-size: 26px;
  font-family: 'Montserrat';
  font-weight: 600;
  line-height: 37px;
  text-align: center;
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