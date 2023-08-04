import Reveal from "./Reveal";

function Hero() {
  return (
    <section className="ml-3 flex h-screen  items-center  text-teal-50 md:ml-0">
      <div className=" space-y-4">
        <Reveal>
          <h1 className=" font-title text-7xl md:text-8xl ">Hey, I'm Amine.</h1>
        </Reveal>
        <Reveal>
          <h2 className=" text-3xl md:text-4xl">
            I'm a{" "}
            <span className=" bg-gradient-to-r from-primary to-accent bg-clip-text font-bold text-transparent">
              Full Stack Developer
            </span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
