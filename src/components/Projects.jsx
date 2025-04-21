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

const ProjectCard = ({ title, description, technologies, image, netlify, github }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`Image for ${title}`} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="tech-stack">{technologies.join(" • ")}</p>

        <div className="project-links"> {/* Flex-container för knapparna */}
          <a href={netlify} target="_blank" rel="noopener noreferrer">
            <img src="/buttondemo.svg" alt="View Live Demo" className="project-button" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src="/buttongit.svg" alt="View the Code" className="project-button" />
          </a>
        </div>
      </div>
    </div>

  );
};



const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
