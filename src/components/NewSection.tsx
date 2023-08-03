interface Props {
  title?: string;
  reverse?: boolean;
  children: React.ReactNode;
}

function NewSection({ title, reverse, children }: Props) {
  return (
    <section className="mb-36 space-y-10">
      <div
        className={`flex items-center  ${reverse ? "flex-row-reverse" : ""} ${
          title ? "gap-8" : ""
        }`}
      >
        <h2 className="font-title text-6xl ">{title}</h2>
        <div className=" h-[1px] w-full bg-gradient-to-r from-accent to-primary"></div>
      </div>
      {children}
    </section>
  );
}

export default NewSection;
