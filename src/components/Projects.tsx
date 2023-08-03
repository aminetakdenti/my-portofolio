import { useEffect, useState } from "react";
import NewSection from "./NewSection";
import Card from "./Card";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        "https://api.github.com/users/aminetakdenti/repos",
      );
      const data = await response.json();
      setProjects(data);
    };
    const fetchReadme = async () => {
      const response = await fetch(
        "https://api.github.com/repos/aminetakdenti/Sigle-Price-Grid-tailwindcss/readme",
      );
      const data = await response.json();
      console.log(data);
    };
    fetchReadme();
    fetchProjects();
  }, []);
  return (
    <NewSection title="Projects">
      <Card
        description="lorem ipsum"
        image="image1.jpg"
        link="http://github.com"
        title="project"
      />
      <div></div>
    </NewSection>
  );
}

export default Projects;
