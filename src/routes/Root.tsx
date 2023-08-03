import About from "../components/About";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Root() {
  return (
    <Container>
      <Hero />
      <About />
      {/* <Projects /> */}
    </Container>
  );
}

export default Root;
