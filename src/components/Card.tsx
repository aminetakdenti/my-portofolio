import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { useState } from "react";
import Reveal from "./Reveal";

interface Props {
  title: string;
  description: string;
  image?: string;
  ghLink: string;
  demoLink?: string;
}

function showLessDescription(paragraph: string): string {
  return paragraph.split(" ").slice(0, 20).join(" ");
}

function toggleText(
  showMoreText: boolean,
  setShowMoreText: any,
  descrption: string,
) {
  if (descrption.split(" ").length <= 20) return;

  let text = "show more...";
  let paragraph = showLessDescription(descrption);
  if (showMoreText) {
    text = "show less";
    paragraph = descrption;
  }

  return (
    <>
      {paragraph}{" "}
      <span
        onClick={() => setShowMoreText(!showMoreText)}
        className=" relative cursor-pointer text-accent after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
      >
        {text}
      </span>
    </>
  );
}

function Card({ title, description, image, ghLink, demoLink }: Props) {
  const [showMoreText, setShowMoreText] = useState(false);

  return (
    <div className=" space-y-7">
      {image && (
        <Reveal>
          <div className="cursor-pointer overflow-hidden rounded bg-gray-800 px-12">
            <img
              src={image}
              className=" h-full w-full translate-y-16 rounded-lg transition-transform duration-200 hover:rotate-3 hover:scale-105"
              alt={image}
            />
          </div>
        </Reveal>
      )}
      <Reveal>
        <div className=" space-y-3">
          <div className=" flex items-center gap-3">
            <h3 className=" w-fit font-title text-xl md:text-2xl">{title}</h3>
            <div className="  h-[1px] w-full bg-gradient-to-r from-accent to-primary"></div>
            {ghLink && (
              <GitHubIcon
                className="h-8 w-8 cursor-pointer text-white transition-all duration-1000 hover:text-accent"
                onClick={() => window.open(ghLink, "_blank")}
              />
            )}
            {demoLink && (
              <LinkIcon
                className="h-8 w-8 cursor-pointer text-white transition-all duration-1000 hover:text-accent"
                onClick={() => window.open(demoLink, "_blank")}
              />
            )}
          </div>
          <div className="flex"></div>
          <p>{toggleText(showMoreText, setShowMoreText, description)}</p>
        </div>
      </Reveal>
    </div>
  );
}

export default Card;
