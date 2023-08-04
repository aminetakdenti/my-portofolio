import About from "@/components/About";
import Contact from "@/components/Contact";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { useEffect } from "react";
import GestureIcon from "@mui/icons-material/Gesture";

function Root() {
  useEffect(() => {
    const faviconLink = document.querySelector("link[rel~='icon']");
    console.log(faviconLink);
  }, []);

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
