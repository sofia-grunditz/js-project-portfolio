import styled from 'styled-components';
import { device } from './theme';

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 1000px;
  background: white;
  position: relative;
  padding-top: 332px;

  @media ${device.desktop} {
    min-height: 850px;
    padding-top: 250px;
  }

  @media ${device.tablet} {
    min-height: 700px;
    padding-top: 180px;
  }

  @media ${device.mobile} {
    min-height: 600px;
    padding-top: 120px;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1044px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media ${device.mobile} {
    max-width: 343px;
    align-items: center;
    gap: 32px;
    padding: 0 16px;
  }
`;

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 22px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const ProfileImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 9999px;

  @media ${device.tablet} {
    width: 120px;
    height: 120px;
  }

  @media ${device.desktop} {
    width: 140px;
    height: 140px;
  }

  @media ${device.mobile} {
    order: -1;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;

  @media ${device.mobile} {
    align-items: center;
    text-align: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.mobile} {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: black;
`;

const Subtitle = styled.div`
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #0B24F5;

  @media ${device.desktop} {
    font-size: 56px;
  }

  @media ${device.tablet} {
    font-size: 32px;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const BioText = styled.div`
  font-size: 18px;
  font-family: 'Hind', sans-serif;
  font-weight: 400;
  color: black;
  text-align: left;

  @media ${device.mobile} {
    text-align: center;
    max-width: 343px;
  }
`;

const ArrowContainer = styled.div`
  width: 27px;
  height: 68px;
  position: absolute;
  left: 742px;
  top: 849px;

  @media ${device.desktop} {
    left: 50%;
    transform: translateX(-50%);
    top: 80%;
  }

  @media ${device.mobile} {
    position: static;
    margin-top: 32px;
  }
`;

const Arrow = styled.img`
  width: 30px;
  height: 45px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ProfileSection>
          <ProfileImage
            src="https://media.licdn.com/dms/image/v2/D4D03AQHWEWzpKrj68g/profile-displayphoto-shrink_800_800/B4DZUJMZ5OHIAc-/0/1739616002532?e=1750896000&v=beta&t=ZmnSJeBUPKitAPWwg3EgGzGHpFT0VS8EEUXQ_UAUGXs"
            alt="Sofia Grunditz"
          />

          <TextBlock>
            <TitleContainer>
              <Title>Hi, I’m Sofia Grunditz</Title>
              <Subtitle>Technical Writer & Frontend Dev</Subtitle>
            </TitleContainer>

            <BioText>
              Sofia is a technical writer with a strong editorial background and a growing
              focus on front-end development. Her journey into web development grew out of
              a desire to combine content and interaction—to not just write about systems,
              but understand and build them. She is currently expanding her skills in
              front-end development, learning how to create accessible, responsive
              interfaces and exploring how design and documentation can work together.
            </BioText>
          </TextBlock>
        </ProfileSection>

        <ArrowContainer>
          <Arrow src="/arrow.svg" alt="Scroll Down Arrow" />
        </ArrowContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
