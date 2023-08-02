// import Carousel from "./Carousel";

import Links from "./Links";

function Header() {
  return (
    <div className="md:relative md:w-full">
      <div className="flex md:sticky md:inset-0 md:h-screen md:items-center ">
        <div className="max-w-lg space-y-6 text-text">
          <p className="md:text-lg lg:text-xl">Hi, my name is</p>
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
            Amine Takdenti
          </h1>
          <h1 className="text-2xl font-bold text-primary md:text-3xl lg:text-5xl">
            I build things for the web.
          </h1>
          <p className="lg:text-lg">
            Hello! 👋 I'm Amine, a full-stack developer with a passion for
            creating exceptional digital experiences. I specialize in React,
            Tailwind CSS, and TypeScript for crafting captivating user
            interfaces. On the back-end, I wield the powers of Express and
            MongoDB to build robust server-side solutions. With React Native, I
            extend my reach to create enchanting cross-platform mobile apps.
          </p>
          {/* <Carousel /> */}
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Header;
