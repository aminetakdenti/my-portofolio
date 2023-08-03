import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  image?: string;
  ghLink: string;
  demoLink?: string;
}

function showMore(paragraph: string): string {
  const words = paragraph.split(" ");
  if (words.length > 20) {
    return words.slice(0, 20).join(" ");
  }
  return paragraph;
}

function toggleText(
  showMoreText: boolean,
  setShowMoreText: any,
  descrptionLength: number,
) {
  if (descrptionLength <= 20) {
    console.log(descrptionLength);
    return;
  }
  if (showMoreText) {
    return (
      <span
        onClick={() => setShowMoreText(false)}
        className=" relative cursor-pointer text-accent after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
      >
        show less
      </span>
    );
  }
  return (
    <span
      onClick={() => setShowMoreText(true)}
      className=" relative cursor-pointer text-accent after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
    >
      show more...
    </span>
  );
}

function Card({ title, description, image, ghLink, demoLink }: Props) {
  const [showMoreText, setShowMoreText] = useState(false);

  return (
    <div className=" space-y-7">
      {image && (
        <div className="cursor-pointer overflow-hidden rounded bg-gray-800 px-12">
          <img
            src={image}
            className=" h-full w-full translate-y-16 rounded-lg transition-transform duration-200 hover:rotate-3 hover:scale-105"
            alt={image}
          />
        </div>
      )}
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
        {showMoreText ? (
          <p>
            {description}{" "}
            {toggleText(
              showMoreText,
              setShowMoreText,
              description.split(" ").length,
            )}
          </p>
        ) : (
          <p className="">
            {showMore(description)}{" "}
            {toggleText(
              showMoreText,
              setShowMoreText,
              description.split(" ").length,
            )}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
