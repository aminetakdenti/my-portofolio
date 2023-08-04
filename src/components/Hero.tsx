import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="ml-3 flex h-screen  items-center  text-teal-50 md:ml-0">
      <div className=" space-y-4">
        <div className=" overflow-hidden">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            className=" font-title text-7xl md:text-8xl "
          >
            Hey, I'm Amine.
          </motion.h1>
        </div>
        <div className=" overflow-hidden">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: 0.2 }}
            className=" text-3xl md:text-4xl"
          >
            I'm a{" "}
            <span className=" bg-gradient-to-r from-primary to-accent bg-clip-text font-bold text-transparent">
              Full Stack Developer
            </span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
