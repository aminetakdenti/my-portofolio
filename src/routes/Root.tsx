import Container from "../components/Container";
import Header from "../components/Header";
import ProjectsSlide from "../components/ProjectsSlide";

function Root() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        <Header />
        <ProjectsSlide />
        {/* <div className="w-2/3 bg-red-950"></div> */}
      </div>
    </Container>
  );
}

export default Root;
