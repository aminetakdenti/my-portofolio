import About from "@/components/About";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

function Root() {
  return (
    <Container>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}

export default Root;
