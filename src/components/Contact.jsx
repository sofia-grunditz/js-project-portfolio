import styled from 'styled-components';
import { device } from './theme';

const ContactSection = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Title = styled.h2`
  color: #0B24F5;
  font-size: 80px;
  font-family: 'Montserrat';
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;

  @media ${device.desktop} {
    font-size: 80px;
  }

  @media ${device.tablet} {
    font-size: 70px;
  }

  @media ${device.mobile} {
    font-size: 56px;
  }

  @media (max-width: 320px) {
    font-size: 48px;
  }
`;
const ContactWrapper = styled.div`
  width: 100%;
  max-width: 1044px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 0 1rem;

  @media ${device.desktop} {
    width: 90%;
  }

  @media ${device.tablet} {
    width: 90%;
    gap: 64px;
  }

  @media ${device.mobile} {
    width: 343px;
    gap: 64px;
  }
`;

const ProfileImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;

  @media ${device.mobile} {
    width: 164px;
    height: 164px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const InfoText = styled.p`
  color: black;
  font-size: 32px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-align: center;
  word-break: break-word;
overflow-wrap: break-word;

  @media ${device.mobile} {
    font-size: 18px;
    word-break: break-word;
overflow-wrap: break-word;
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-end;
`;

const SocialIconLink = styled.a`
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 50%;
  transition: background 0.3s;

  &:hover {
    background: #0B24F5;
  }

  img {
    width: 24px;
    height: 24px;
    filter: invert(0);
  }

  @media ${device.mobile} {
    width: 32px;
    height: 32px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;


const Contact = () => {
  return (
    <ContactSection>
      <Title>Let’s talk</Title>
      <ContactWrapper>
        <ProfileImage src="https://media.licdn.com/dms/image/v2/D4D03AQHWEWzpKrj68g/profile-displayphoto-shrink_800_800/B4DZUJMZ5OHIAc-/0/1739616002532?e=1750896000&v=beta&t=ZmnSJeBUPKitAPWwg3EgGzGHpFT0VS8EEUXQ_UAUGXs"
          alt="Sofia Grunditz" />
        <InfoContainer>
          <InfoText>Sofia Grunditz</InfoText>
          <InfoText>+46(0)763 12 33 45</InfoText>
          <InfoText>tora.s.grunditz@gmail.com</InfoText>
        </InfoContainer>
        <SocialIconsWrapper>
          <SocialIconLink href="https://www.linkedin.com/in/sofia-grunditz-608648163/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn icon" />
          </SocialIconLink>
          <SocialIconLink href="https://github.com/sofia-grunditz" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub icon" />
          </SocialIconLink>
        </SocialIconsWrapper>
      </ContactWrapper>
    </ContactSection>
  );
};

export default Contact;
