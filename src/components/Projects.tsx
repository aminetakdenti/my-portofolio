import NewSection from "./NewSection";
import Card from "./Card";
import projectsData from "../projects.json";

function Projects() {
  return (
    <NewSection title="Projects" reverse>
      <div className=" grid grid-cols-1 gap-10 md:grid-cols-2">
        {projectsData.map((project, idx) => (
          <Card
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </NewSection>
  );
}

export default Projects;
