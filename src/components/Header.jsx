import styled from "styled-components";
import { device } from "./theme";

const PROFILE_IMAGE_URL =
  "https://media.licdn.com/dms/image/v2/D4D03AQHWEWzpKrj68g/profile-displayphoto-shrink_800_800/B4DZUJMZ5OHIAc-/0/1739616002532?e=1750896000&v=beta&t=ZmnSJeBUPKitAPWwg3EgGzGHpFT0VS8EEUXQ_UAUGXs";

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
  padding-top: 332px;

  @media ${device.tablet} {
    padding-top: 256px;
  }

  @media ${device.mobile} {
    padding-top: 64px;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;

  @media ${device.desktop} {
    padding: 0 234px;
  }

  @media ${device.tablet} {
    padding: 0 161px;
  }

  @media ${device.mobile} {
    max-width: 343px;
    padding: 0 16px;
    align-items: center;
  }
`;

const ArrowContainer = styled.div`
  width: 27px;
  height: 68px;
  margin-top: 102px;
  align-self: center;
`;

const Arrow = styled.img`
  width: 30px;
  height: 45px;
`;

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.mobile} {
    align-items: center;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 32px;
    align-items: center;
  }
`;

const DesktopProfileImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 9999px;
  display: block;

  @media ${device.mobile} {
    display: none;
  }
`;

const MobileProfileImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 9999px;
  display: none;

  @media ${device.mobile} {
    display: block;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;

  @media ${device.mobile} {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: black;
  margin: 0;

  @media ${device.mobile} {
    text-align: left;
  }
`;

const Subtitle = styled.h2`
  font-size: 80px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #0b24f5;
  margin: 0;

  @media ${device.tablet} {
    font-size: 80px;
  }

  @media ${device.mobile} {
    font-size: 32px;
    text-align: left;
  }
`;

const BioText = styled.p`
  font-size: 18px;
  font-family: "Hind", sans-serif;
  font-weight: 400;
  color: black;
  margin: 0;
  flex: 1;
  word-wrap: break-word;
  max-width: 700px;

  @media ${device.mobile} {
    text-align: left;
    max-width: 343px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <MobileProfileImage src={PROFILE_IMAGE_URL} alt="Sofia Grunditz" />
        <ProfileSection>
          <TitleBlock>
            <Title>Hi, I’m Sofia Grunditz</Title>
            <Subtitle>Technical Writer & Frontend Dev</Subtitle>
          </TitleBlock>
          <InfoRow>
            <DesktopProfileImage src={PROFILE_IMAGE_URL} alt="Sofia Grunditz" />
            <BioText>
              Sofia is a technical writer with a strong editorial background and
              a growing focus on front-end development. Her journey into web
              development grew out of a desire to combine content and
              interaction—to not just write about systems, but understand and
              build them. She is currently expanding her skills in front-end
              development, learning how to create accessible, responsive
              interfaces and exploring how design and documentation can work
              together.
            </BioText>
          </InfoRow>
        </ProfileSection>
        <ArrowContainer>
          <Arrow src="/arrow.svg" alt="Scroll Down Arrow" />
        </ArrowContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
