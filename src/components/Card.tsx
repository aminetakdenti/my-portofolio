interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

function Card({ title, description, image, link }: Props) {
  return (
    <div>
      <div>
        <img src={image} alt={image} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}></a>
      </div>
    </div>
  );
}

export default Card;
