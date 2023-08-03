import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Links() {
  return (
    <div className=" flex gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.2 }}
        className="flex gap-2 "
      >
        <GitHubIcon />
        <a
          href="http://github.com/aminetakdenti"
          target="_blank"
          rel="noopener noreferrer"
          className="relative after:absolute after:-bottom-[1px] after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
        >
          github
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.2 }}
        className="flex gap-2 "
      >
        <LinkedInIcon />
        <a
          href="http://github.com/aminetakdenti"
          target="_blank"
          rel="noopener noreferrer"
          className="relative after:absolute after:-bottom-[1px] after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
        >
          LinkedIn
        </a>
      </motion.div>
    </div>
  );
}

export default Links;
