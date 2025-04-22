import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: relative;

  @media (max-width: 1281px) { /* Desktop */
    min-height: 650px;
  }

  @media (max-width: 745px) { /* Tablet */
    min-height: 500px;
    justify-content: flex-start;
    padding: 40px 16px;
  }

  @media (max-width: 376px) { /* Mobil */
    min-height: 400px;
    justify-content: center;
    padding: 30px 12px;
  }
`;


const HeaderContent = styled.div`
  width: 1044px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 1281px) { /* Desktop */
    width: 958px;
  }

  @media (max-width: 745px) { /* Tablet */
    width: 680px;
    align-items: flex-start;
    gap: 32px;
    left: 32px;
    top: 128px;
  }

  @media (max-width: 376px) { /* Mobil */
    width: 343px;
    align-items: center;
    gap: 32px;
    left: 16px;
    top: 64px;
  }
`;

const TitleContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 745px) {
    align-items: center;
  }
`;

const Title = styled.div`
  align-self: stretch;
  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: black;
  @media (max-width: 1281px) {
    font-size: 24px;
  }

  @media (max-width: 745px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.div`
  align-self: stretch;
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #0B24F5;
  @media (max-width: 1281px) {
    font-size: 56px;
  }

  @media (max-width: 745px) {
    font-size: 32px;
  }
`;

const ProfileSection = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 22px;
  @media (max-width: 1281px) {
    max-width: 680px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 745px) {
    max-width: 343px;
    flex-direction: column;
    gap: 16px;
  }
`;
const ProfileImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 9999px;
  @media (max-width: 1281px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 745px) {
    width: 120px;
    height: 120px;
  }
`;

const BioText = styled.div`
  flex: 1;
  font-size: 18px;
  font-family: 'Hind', sans-serif;
  font-weight: 400;
  color: black;
  @media (max-width: 1281px) {
    font-size: 16px;
    text-align: left;
  }

  @media (max-width: 745px) {
    font-size: 14px;
    text-align: left;
    justify-content: left;
  }
`;
const ArrowContainer = styled.div`
  width: 27px;
  height: 68px;
  position: absolute;
  bottom: -40px; 
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 1281px) {
    bottom: -30px;
  }

  @media (max-width: 745px) {
    bottom: -20px;
  }
`;

const Arrow = styled.img`
  width: 30px;
  height: 45px;
  transform: rotate(0deg); 
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <TitleContainer>
          <Title>Hi, I’m Sofia Grunditz</Title>
          <Subtitle>Technical Writer & Frontend Dev</Subtitle>
        </TitleContainer>
        <ProfileSection>
          <ProfileImage src="https://media.licdn.com/dms/image/v2/D4D03AQHWEWzpKrj68g/profile-displayphoto-shrink_800_800/B4DZUJMZ5OHIAc-/0/1739616002532?e=1750896000&v=beta&t=ZmnSJeBUPKitAPWwg3EgGzGHpFT0VS8EEUXQ_UAUGXs"
            alt="Sofia Grunditz" />
          <BioText>
            Sofia is a technical writer with a strong editorial background and a growing focus on front-end development.
            Her journey into web development grew out of a desire to combine content and interaction—to not just write
            about systems, but understand and build them. She is currently expanding her skills in front-end development,
            learning how to create accessible, responsive interfaces and exploring how design and documentation can work
            together.
          </BioText>
        </ProfileSection>
      </HeaderContent>
      <ArrowContainer>
        <Arrow src="/arrow.svg" alt="Scroll Down Arrow" />
      </ArrowContainer>
    </HeaderContainer>
  );
}
