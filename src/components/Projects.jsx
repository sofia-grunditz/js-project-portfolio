import styled from 'styled-components';
import { device } from './theme';

const ProjectsSection = styled.section`
  width: 100%;
  padding: 128px 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.tablet} {
    padding: 96px 16px;
  }

  @media ${device.mobile} {
    padding: 64px 12px;
    align-items: center;
  }
`;

const ProjectsContainer = styled.div`
  width: 1044px;
  margin-left: 234px;
  display: flex;
  flex-direction: column;
  gap: 128px;

  @media ${device.desktop} {
    width: 958px;
    margin-left: auto;
    margin-right: auto;
    gap: 96px;
  }

  @media ${device.tablet} {
    width: 680px;
    margin: 0 auto;
    padding-left: 32px;
    gap: 64px;
  }

  @media ${device.mobile} {
    width: 100%;
    max-width: 343px;
    margin: 0 auto;
    padding: 0 16px;
    gap: 32px;
    align-items: center;
  }
`;

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
    width: 343px;
    margin: 64px auto 24px auto;
    text-align: center;
    padding: 0;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  max-width: 1044px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media ${device.desktop} {
    max-width: 958px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    gap: 24px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 500px;

  @media ${device.desktop} {
    width: 380px;
  }

  @media ${device.tablet} {
    width: 340px;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0 16px;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media ${device.tablet}, ${device.mobile} {
    align-items: center;
    text-align: center;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 32px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: black;

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

const ProjectDescription = styled.p`
  font-size: 18px;
  font-family: 'Hind';
  font-weight: 400;
  color: black;
  max-width: 100%;

  @media ${device.desktop} {
    font-size: 16px;
    max-width: 958px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    max-width: 680px;
    padding: 0 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    max-width: 343px;
    padding: 0 12px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-start;

  @media ${device.tablet}, ${device.mobile} {
    justify-content: center;
  }
`;

const Tech = styled.div`
  padding: 2px 6px;
  background: black;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  margin: 8px 4px 0 0;

  @media ${device.tablet} {
    font-size: 14px;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;

  @media ${device.desktop} {
    gap: 28px;
  }

  @media ${device.mobile} {
    gap: 24px;
    justify-content: center;
  }
`;

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
    description:
      "I built a dynamic recipe library by integrating the Spoonacular API. I fetched real-time recipe data using fetch() and displayed it dynamically, adapting filtering and sorting to match the API's response format.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imagerecipe.png",
    netlify: "https://recipeproject-sofia.netlify.app/",
    github: "https://github.com/sofia-grunditz/js-project-recipe-library",
  },
  {
    title: "Weather App",
    description:
      "We created a responsive weather app using TypeScript and the OpenWeatherMap API. It displays current weather conditions, temperature, sunrise/sunset, and a 4-day forecast while following a design mockup.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imageweather.png",
    netlify: "https://watherrr.netlify.app/",
    github: "https://github.com/sofia-grunditz/js-project-weather-app",
  },
  {
    title: "Spearhead Merchandise Shop",
    description:
      "I built a responsive merchandise shop using HTML, CSS, and JavaScript. The site includes a flexible product grid, signup form, and hamburger menu, utilizing CSS Grid and Flexbox for layout.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imagespearhead.png",
    github: "https://github.com/sofia-grunditz/js-project-business-site",
    netlify: "https://courageous-manatee-7edfdb.netlify.app/",
  },
  {
    title: "Web Accessibility Project",
    description:
      "I built an accessible multiple-choice quiz using semantic HTML and ARIA roles. The quiz features live region feedback, keyboard navigation, and WCAG-compliant color contrast testing with WAVE and Lighthouse.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imagewebaccessibility.png",
    github: "https://github.com/sofia-grunditz/js-project-accessibility",
    netlify: "https://accessibilitysofiag.netlify.app/",
  },
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
                <ActionButton href={project.netlify} target="_blank">
                  Live Demo
                </ActionButton>
                <ActionButton href={project.github} target="_blank">
                  View the Code
                </ActionButton>
              </ButtonContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
