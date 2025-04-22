import styled from 'styled-components';

const ThoughtsSection = styled.section`
  background-color: #FFECEA;
  width: 100%;
  text-align: left;
`;

const Title = styled.h2`
  max-width: 1044px;
  margin: 0 auto;
  color: #FF4575;
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
  text-align: left; /* Säkerställer att texten ligger korrekt */
  margin-bottom: 230px;
  margin-top: 200px; /* Justera avståndet från toppen */
  
`;

const ThoughtsContainer = styled.div`
  max-width: 1044px;
  margin: 0 auto; /* Centrera och undvik extra space */
  display: flex;
  flex-direction: column;
  gap: 64px;
`;


const ThoughtCard = styled.div`
display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  width: 1044px; /* Säkerställ att hela kortet har rätt bredd */
`;


const ThoughtImage = styled.img`
  width: 1044px;
  height: 340px;
  background-color: #D9D9D9;
  border-left: 20px solid #FF4575;
  border-bottom: 20px solid #FF4575;
  display: block;
  margin-bottom: 40px;
`;

const ThoughtContent = styled.div`
  width: 1044px; /* Ser till att allt i content börjar på samma plats */
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const DateTag = styled.div`
  display: inline-block;
  width: auto; /* Håller den i sin naturliga storlek */
  padding: 2px 6px;
  background: black;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

const ThoughtTitle = styled.h3`
  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: black;
  width: 1044px; /* Säkerställ att titeln startar på samma plats som bilden */
`;

const ThoughtText = styled.p`
  font-size: 20px;
  font-family: 'Hind', sans-serif;
  font-weight: 400;
  color: black;
  line-height: 1.6;
  max-width: 1044px;
  text-align: left;
`;

const Thoughts = () => {
  return (
    <ThoughtsSection>
      <Title>My thoughts</Title>
      <ThoughtsContainer>
        <ThoughtCard>
          <ThoughtImage src="/images/imagethoughts.png" alt="Glass" />
          <ThoughtContent>
            <DateTag>April 2025</DateTag>
            <ThoughtTitle>Building Worlds with Words</ThoughtTitle>
            <ThoughtText>
              In my current role as a technical writer, I create configuration guides, system administration documentation, and technical tutorials that help users understand and navigate complex systems. I enjoy digging into technical details and turning them into content that’s clear, structured, and actually helpful—whether it's for IT pros or curious beginners.

              Beyond my day job, I’m also a writer in the more traditional sense. In 2016, I received a literary award for my fiction. Writing has been central to how I process the world and I’ve always loved building worlds with words—whether I’m writing a short story, or explaining how a server works - or now, coding websites into existence.

              My journey into web development grew out of a desire to combine content and interaction—to not just write about systems or software, but understand and build them. I’m currently expanding my skills in front-end development, learning how to create accessible, responsive interfaces and exploring how design and documentation can work together. Writing and web development may seem like different disciplines, but to me, they’re both about the same thing: structure, clarity, and storytelling.
            </ThoughtText>
          </ThoughtContent>
        </ThoughtCard>
      </ThoughtsContainer>
    </ThoughtsSection>
  );
};

export default Thoughts;
