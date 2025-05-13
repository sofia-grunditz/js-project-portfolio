import styled from 'styled-components';
import { device } from './theme';

const ThoughtsSection = styled.section`
  background-color: #FFECEA;
  width: 100%;
  text-align: left;
  padding: 124px 0 60px;

  @media ${device.tablet} {
    padding: 100px 0 60px;
  }

  @media ${device.mobile} {
    padding: 60px 15px 40px;
  }
`;

const Title = styled.h2`
  color: #D5003C;
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-align: left;
  margin-bottom: 128px;

  @media ${device.tablet} {
    font-size: 60px;
    margin-bottom: 96px;
  }

  @media ${device.mobile} {
    font-size: 40px;
    text-align: center;
    margin-bottom: 80px;
  }
`;



const ThoughtsContainer = styled.div`
  max-width: 1044px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media ${device.tablet} {
    width: 95%;
    gap: 48px;
  }

  @media ${device.mobile} {
    width: 100%;
    gap: 24px;
  }
`;

const ThoughtCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  width: 100%;

  @media ${device.tablet} {
    padding-left: 32px;
  }

  @media ${device.mobile} {
    padding-left: 0;
  }
`;

const ThoughtImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ThoughtContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
`;

const DateTag = styled.div`
  display: inline-block;
  padding: 2px 6px;
  background: black;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  align-self: flex-start;
  white-space: nowrap;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const ThoughtTitle = styled.h3`
  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: black;
  width: 100%;
  box-sizing: border-box;

  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const ThoughtText = styled.p`
  font-size: 20px;
  font-family: 'Hind', sans-serif;
  font-weight: 400;
  color: black;
  line-height: 1.6;
  max-width: 100%;
  text-align: left;
  box-sizing: border-box;

  @media ${device.tablet} {
    font-size: 18px;
    padding: 0 20px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    padding: 0 15px;
  }
`;

const Thoughts = () => {
  return (
    <ThoughtsSection>
      <ThoughtsContainer>
        <Title>My thoughts</Title>

        <ThoughtCard>
          <ThoughtImage src="/images/imagethoughts.png" alt="Glass" />
          <ThoughtContent>
            <DateTag>April 2025</DateTag>
            <ThoughtTitle>BUILDING WORLDS WITH WORDS</ThoughtTitle>
            <ThoughtText>
              In my current role as a technical writer, I create configuration guides, system administration documentation, and technical tutorials that help users understand and navigate complex systems. I enjoy digging into technical details and turning them into content that’s clear, structured, and actually helpful—whether it's for IT pros or curious beginners.
              <br /><br />
              Beyond my day job, I’m also a writer in the more traditional sense. In 2016, I received a literary award for my fiction. Writing has been central to how I process the world and I’ve always loved building worlds with words—whether I’m writing a short story, or explaining how a server works - or now, coding websites into existence.
              <br /><br />
              My journey into web development grew out of a desire to combine content and interaction—to not just write about systems or software, but understand and build them. I’m currently expanding my skills in front-end development, learning how to create accessible, responsive interfaces and exploring how design and documentation can work together. Writing and web development may seem like different disciplines, but to me, they’re both about the same thing: structure, clarity, and storytelling.
            </ThoughtText>
          </ThoughtContent>
        </ThoughtCard>
      </ThoughtsContainer>
    </ThoughtsSection>
  );
};

export default Thoughts;
