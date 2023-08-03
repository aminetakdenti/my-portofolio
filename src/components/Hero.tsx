// import { motion } from "framer-motion";
// import Links from "./Links";

function Hero() {
  return (
    <section className="ml-3 flex h-screen  items-center  text-teal-50 md:ml-0">
      <div className=" space-y-4">
        <h1 className="font-title text-7xl md:text-8xl ">Hey, I'm Amine.</h1>
        <h2 className=" text-3xl md:text-4xl">
          I'm a{" "}
          <span className=" bg-gradient-to-r from-primary to-accent bg-clip-text font-bold text-transparent">
            Full Stack Developer
          </span>
        </h2>
        <button
          type="button"
          className=" relative  rounded-md text-xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
        >
          Contact me
        </button>
      </div>
    </section>
    // <div className="md:relative md:w-11/12 ">
    //   <div className="flex  md:sticky md:inset-0 md:h-screen md:items-center ">
    //     <div className="max-w-4xl  space-y-6 text-text">
    //       <motion.p
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0, duration: 0.2 }}
    //         className="  md:text-lg lg:text-xl"
    //       >
    //         Hi, my name is
    //       </motion.p>
    //       <motion.h1
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.3, duration: 0.2 }}
    //         className="text-2xl font-bold md:text-3xl lg:text-5xl"
    //       >
    //         Amine Takdenti
    //       </motion.h1>
    //       <motion.h1
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.6, duration: 0.2 }}
    //         className="text-2xl font-bold text-primary md:text-3xl lg:text-5xl"
    //       >
    //         I build things for the web.
    //       </motion.h1>
    //       <motion.p
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 1, duration: 0.2 }}
    //         className="lg:text-lg"
    //       >
    //         Hello! 👋 I'm Amine, a full-stack developer with a passion for
    //         creating exceptional digital experiences. I specialize in React,
    //         Tailwind CSS, and TypeScript for crafting captivating user
    //         interfaces. On the back-end, I wield the powers of Express and
    //         MongoDB to build robust server-side solutions. With React Native, I
    //         extend my reach to create enchanting cross-platform mobile apps.
    //       </motion.p>
    //       {/* <Carousel /> */}
    //       <Links />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero;
