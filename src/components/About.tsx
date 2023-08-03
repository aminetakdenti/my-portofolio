import Links from "./Links";
import NewSection from "./NewSection";
import Skill from "./Skill";

const skills = [
  "javascript",
  "react",
  "html",
  "css",
  "tailwindcss",
  "typescirpt",
  "redux",
  "nodejs",
  "express",
  "Rest API",
  "mongodb",
  "react native",
];

function About() {
  return (
    <NewSection title="About">
      <div className="flex gap-10">
        <div className="w-2/3 space-y-10">
          <p className=" text-xl">
            Hello! 👋 I'm Amine, a full-stack developer with a passion for
            creating exceptional digital experiences. I specialize in React,
            Tailwind CSS, and TypeScript for crafting captivating user
            interfaces. On the back-end, I wield the powers of Express and
            MongoDB to build robust server-side solutions. With React Native, I
            extend my reach to create enchanting cross-platform mobile apps.
          </p>
          <Links />
        </div>
        <div className="w-1/3 space-y-4">
          <h3 className="font-title text-3xl">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <Skill skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </NewSection>
  );
}

export default About;
