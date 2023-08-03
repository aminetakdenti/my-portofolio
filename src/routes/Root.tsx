import About from "../components/About";
import Container from "../components/Container";
import Hero from "../components/Hero";
import NewSection from "../components/NewSection";
import Projects from "../components/Projects";

function Root() {
  return (
    <Container>
      <Hero />
      <About />
      <NewSection title="Projects" reverse>
        <div></div>
      </NewSection>
      {/* <Projects /> */}
    </Container>
  );
}

export default Root;
