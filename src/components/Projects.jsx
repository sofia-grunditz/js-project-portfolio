const projectData = [
  {
    title: "Recipe Library",
    description: "In this project, I built a dynamic recipe library by integrating the Spoonacular API. Instead of using static mock data, I fetched real-time recipe data using the fetch() function in JavaScript and displayed it dynamically on the site. I also adapted the filtering and sorting features to match the API's response format.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imagerecipe.png",
    netlify: "https://recipeproject-sofia.netlify.app/", /* Netlify-länk */
    github: "https://github.com/sofia-grunditz/js-project-recipe-library",
  },
  {
    title: "Weather App",
    description: "In this group project, we created a responsive weather app using TypeScript and the OpenWeatherMap API. The app displays current weather conditions, temperature, sunrise and sunset times, and a 4-day forecast for a selected city. We worked collaboratively to follow a chosen design mockup, ensuring the layout and styling matched. ",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imageweather.png",
    netlify: "https://watherrr.netlify.app/",
    github: "https://github.com/sofia-grunditz/js-project-weather-app",
  }
  ,
  {
    title: "Spearhead Merchandise Shop",
    description: "For this project, I built a fully responsive merchandise shop for t-shirts and clothing using HTML, CSS, and JavaScript. The site features a flexible product grid, a hero section, a signup form with multiple input types, and a responsive hamburger menu. I used CSS Grid and Flexbox for layout and focused on clean, accessible code throughout.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imagespearhead.png",
    github: "https://github.com/sofia-grunditz/js-project-business-site",
    netlify: "https://watherrr.netlify.app/https://courageous-manatee-7edfdb.netlify.app/ttps://github.com/sofia-grunditz/js-project-business-site",
  }
  ,
  {
    title: "Web accessibility project",
    description: "In this project, I built an accessible multiple-choice quiz designed for all users, including those using screen readers and keyboards. I used semantic HTML, ARIA roles. The quiz includes instant feedback via live regions, a “Skip to Content” link, and supports full keyboard navigation. I also followed WCAG guidelines for color contrast and tested accessibility using tools like WAVE and Lighthouse.",
    technologies: ["HTML5", "CSS3", "Node"],
    image: "/images/imagewebaccessibility.png",
    github: "https://github.com/sofia-grunditz/js-project-accessibility",
    netlify: "https://accessibilitysofiag.netlify.app/",
  }
];
import styled from 'styled-components';

const ProjectsSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`;

const Title = styled.h2`
  color: #0B24F5;
  font-size: 80px;
  font-family: 'Montserrat';
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
`;

const ProjectsContainer = styled.div`
  width: 1044px;
  display: flex;
  flex-direction: column;
  gap: 128px;
`;

const ProjectCard = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const ProjectImage = styled.img`
  width: 408px;
  height: 280px;
  border-left: 20px solid #0B24F5;
  border-bottom: 20px solid #0B24F5;
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-size: 32px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: black;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  font-family: 'Hind';
  font-weight: 400;
  color: black;
`;

const TechStack = styled.div`
  display: flex;
  gap: 4px;
`;

const Tech = styled.div`
  padding: 2px 6px;
  background: black;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 32px;
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
`;

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
