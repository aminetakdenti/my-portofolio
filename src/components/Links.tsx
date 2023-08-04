import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Reveal from "./Reveal";

function Links() {
  return (
    <div className=" flex gap-4">
      <Reveal>
        <div className="flex gap-2 ">
          <GitHubIcon />
          <a
            href="http://github.com/aminetakdenti"
            target="_blank"
            rel="noopener noreferrer"
            className="relative after:absolute after:-bottom-[1px] after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
          >
            github
          </a>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex gap-2 ">
          <LinkedInIcon />
          <a
            href="https://www.linkedin.com/in/amine-takdenti-4a709b1b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative after:absolute after:-bottom-[1px] after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </div>
  );
}

export default Links;
