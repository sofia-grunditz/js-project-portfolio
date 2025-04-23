import styled from 'styled-components';
import { device } from './theme';

// Style för ProjectsSection
const ProjectsSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  overflow: hidden;  /* Prevents overflow */
  @media ${device.desktop} {
    padding: 3rem 0;
  }
  @media ${device.tablet} {
    padding: 2rem 16px;
  }
  @media ${device.mobile} {
    padding: 1.5rem 12px;
    align-items: center;
  }
`;

// Style för ProjectsContainer
const ProjectsContainer = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 128px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.desktop} {
    width: 958px;
    gap: 96px;
  }

  @media ${device.tablet} {
    width: 680px;
    gap: 64px;
    padding-left: 32px;
  }

  @media ${device.mobile} {
    width: 100%;
    gap: 32px;
    align-items: center;
    margin-left: 16px;
    margin-right: 16px; /* Added right margin to prevent overflow */
  }
`;

// Title för Featured Projects
const Title = styled.h2`
  color: #0B24F5;
  font-size: 80px;
  font-family: 'Montserrat';
  font-weight: 700;
  text-align: left;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  width: 1044px;

  @media ${device.desktop} {
    font-size: 56px;
    margin-bottom: 3rem;
    width: 958px;
  }

  @media ${device.tablet} {
    font-size: 40px;
    margin-bottom: 2rem;
    width: 680px;
    padding-left: 32px;
  }

  @media ${device.mobile} {
    font-size: 32px;
    margin-bottom: 1.5rem;
    width: 343px;
    padding-left: 16px;
    text-align: center;
  }
`;

// ProjectCard styling (för flex-layout)
const ProjectCard = styled.div`
  display: flex;
  gap: 16px;
  align-items: center; /* Ändrat från flex-start */
  margin-left: auto;
  margin-right: auto;
  max-width: 1044px; /* Sätter en maxbredd */
  flex-wrap: wrap;
  text-align: left;

  @media ${device.desktop} {
    max-width: 958px;
  }

  @media ${device.tablet} {
    max-width: 680px;
    align-items: center;
  }

  @media ${device.mobile} {
    width: 100%;
    align-items: center;
  }
`;

// ProjectImage styling (justera för Figma-stilen)
const ProjectImage = styled.img`
 width: 100%;
  max-width: 500px;
  height: auto;
  border-left: 20px solid #0B24F5;
  border-bottom: 20px solid #0B24F5;
  margin-left: 0;
  margin-right: auto;

  @media ${device.desktop} {
    width: 380px;  /* Sätt en specifik bredd för desktop */
    max-width: 100%;  /* Förhindrar att bilden blir större än containerbredden */
  }

  @media ${device.tablet} {
    width: 340px;
    max-width: 100%;
  }

  @media ${device.mobile} {
    width: 100%;
    height: auto;
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    flex-shrink: 0;
  }
`;

// ProjectContent styling för innehållsdelen
const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    align-items: center;
    text-align: center;
  }

  @media ${device.mobile} {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

// ProjectTitle styling (till projektets titel)
const ProjectTitle = styled.h3`
  font-size: 32px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: black;
  text-align: left;

  margin-left: 16px;  /* Lägger till vänstermarginal på mindre skärmar */
  margin-right: 16px; /* Lägger till höger marginal på mindre skärmar */

  @media ${device.desktop} {
    font-size: 28px;
  }

  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

// ProjectDescription styling (till projektbeskrivning)
const ProjectDescription = styled.p`
 font-size: 18px;
  font-family: 'Hind';
  font-weight: 400;
  color: black;
  text-align: left;
  max-width: 100%;  /* Se till att den inte överstiger tillgänglig bredd */
  margin-left: 16px;  /* Lägger till vänstermarginal på mindre skärmar */
  margin-right: 16px; /* Lägger till höger marginal på mindre skärmar */

  @media ${device.desktop} {
    font-size: 16px;
    max-width: 958px; /* Maxbredd för desktop */
    margin-left: auto;
    margin-right: auto;
  }

  @media ${device.tablet} {
    font-size: 16px;
    max-width: 680px; /* Maxbredd för tablet */
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    max-width: 343px; /* Maxbredd för mobil */
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

// TechStack styling (för teknikstackens etiketter)
const TechStack = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: left;
  margin-left: 16px;  /* Lägger till vänstermarginal på mindre skärmar */
  margin-right: 16px; /* Lägger till höger marginal på mindre skärmar */
`;

// Tech styling för varje teknologibadge
const Tech = styled.div`
  padding: 2px 6px;
  background: black;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 8px;

  @media ${device.tablet} {
    font-size: 14px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

// ButtonContainer styling för knappar
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
  justify-content: flex-start;
  width: 100%;

  @media ${device.desktop} {
    gap: 28px;
  }

  @media ${device.tablet} {
    justify-content: flex-start;
  }

  @media ${device.mobile} {
    gap: 24px;
  }
`;

// ActionButton styling för knapparna
const ActionButton = styled.a`
  display: flex;
  align-items: center;
  background: #F5F5F5;
  border-radius: 40px;
  padding: 0.5rem 1rem;
  color: #333;
  font-size: 20px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-decoration: none;

  @media ${device.desktop} {
    font-size: 18px;
    padding: 0.5rem 0.8rem;
  }

  @media ${device.tablet} {
    font-size: 18px;
    padding: 0.4rem 0.8rem;
  }

  @media ${device.mobile} {
    font-size: 16px;
    padding: 0.4rem 0.6rem;
  }
`;
const projectData = [
  {
    title: "Recipe Library",
    description: "I built a dynamic recipe library by integrating the Spoonacular API. I fetched real-time recipe data using fetch() and displayed it dynamically, adapting filtering and sorting to match the API's response format.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imagerecipe.png",
    netlify: "https://recipeproject-sofia.netlify.app/",
    github: "https://github.com/sofia-grunditz/js-project-recipe-library",
  },
  {
    title: "Weather App",
    description: "We created a responsive weather app using TypeScript and the OpenWeatherMap API. It displays current weather conditions, temperature, sunrise/sunset, and a 4-day forecast while following a design mockup.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imageweather.png",
    netlify: "https://watherrr.netlify.app/",
    github: "https://github.com/sofia-grunditz/js-project-weather-app",
  },
  {
    title: "Spearhead Merchandise Shop",
    description: "I built a responsive merchandise shop using HTML, CSS, and JavaScript. The site includes a flexible product grid, signup form, and hamburger menu, utilizing CSS Grid and Flexbox for layout.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imagespearhead.png",
    github: "https://github.com/sofia-grunditz/js-project-business-site",
    netlify: "https://courageous-manatee-7edfdb.netlify.app/",
  },
  {
    title: "Web Accessibility Project",
    description: "I built an accessible multiple-choice quiz using semantic HTML and ARIA roles. The quiz features live region feedback, keyboard navigation, and WCAG-compliant color contrast testing with WAVE and Lighthouse.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imagewebaccessibility.png",
    github: "https://github.com/sofia-grunditz/js-project-accessibility",
    netlify: "https://accessibilitysofiag.netlify.app/",
  }
];

const Projects = () => {
  return (
    <ProjectsSection>
      <Title>Featured Projects</Title>
      <ProjectsContainer>
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, i) => (
                    <Tech key={i}>{tech}</Tech>
                  ))}
                </TechStack>
              </div>
              <ButtonContainer>
                <ActionButton href={project.netlify} target="_blank">Live Demo</ActionButton>
                <ActionButton href={project.github} target="_blank">View the Code</ActionButton>
              </ButtonContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
