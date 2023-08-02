import { motion } from "framer-motion";
import Links from "./Links";

function Header() {
  return (
    <div className="md:relative md:w-full">
      <div className="flex md:sticky md:inset-0 md:h-screen md:items-center ">
        <div className="max-w-3xl space-y-6 text-text">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}
            className="  md:text-lg lg:text-xl"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-2xl font-bold md:text-3xl lg:text-5xl"
          >
            Amine Takdenti
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="text-2xl font-bold text-primary md:text-3xl lg:text-5xl"
          >
            I build things for the web.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="lg:text-lg"
          >
            Hello! 👋 I'm Amine, a full-stack developer with a passion for
            creating exceptional digital experiences. I specialize in React,
            Tailwind CSS, and TypeScript for crafting captivating user
            interfaces. On the back-end, I wield the powers of Express and
            MongoDB to build robust server-side solutions. With React Native, I
            extend my reach to create enchanting cross-platform mobile apps.
          </motion.p>
          {/* <Carousel /> */}
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Header;
