import NewSection from "./NewSection";
import Card from "./Card";
import projectsData from "../projects.json";

function Projects() {
  return (
    <NewSection title="Projects">
      <div className=" grid grid-cols-1 gap-10 md:grid-cols-2">
        {projectsData.map((project) => (
          <Card
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
