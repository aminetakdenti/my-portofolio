import Container from "../components/Container";
import Header from "../components/Header";

function Root() {
  return (
    <Container>
      <div className="my-5 flex flex-col md:flex-row">
        <Header />
        <div className="  w-full  bg-red-200"></div>
      </div>
    </Container>
  );
}

export default Root;
