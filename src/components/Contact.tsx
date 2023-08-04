function Contact() {
  return (
    <section className=" flex h-[60vh] items-center justify-center  text-center">
      <div className="space-y-10">
        <h2 className=" font-title text-6xl md:text-8xl">Contact me</h2>
        <p className="text-lg leading-tight md:text-3xl md:leading-loose">
          Shoot me an email if you want to connect! You can also find me on{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amine-takdenti-4a709b1b1/"
            className="relative cursor-pointer text-accent after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
          >
            LinkedIn
          </a>
        </p>

        <a
          className="relative block cursor-pointer font-title text-xl transition-colors duration-200 hover:text-accent md:text-4xl"
          href="mailto:contact@example.com"
        >
          contact@example.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
