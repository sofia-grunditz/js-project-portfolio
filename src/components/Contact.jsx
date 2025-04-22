import styled from 'styled-components';

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
`;

const ContactWrapper = styled.div`
  width: 1044px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const ProfileImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;
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
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-end;
`;

const SocialIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #D0D0D0;
  border-radius: 50%;
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
          <SocialIcon />
          <SocialIcon />
        </SocialIconsWrapper>
      </ContactWrapper>
    </ContactSection>
  );
};

export default Contact;
