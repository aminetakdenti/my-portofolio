interface Props {
  skill: string;
}
function Skill({ skill }: Props) {
  return (
    <div className="w-fit rounded-3xl bg-primary p-2">
      <p className=" text-sx capitalize">{skill}</p>
    </div>
  );
}

export default Skill;
