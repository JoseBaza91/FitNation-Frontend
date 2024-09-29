import CardC from "../components/CardC";
import CarouselC from "../components/CarouselC";

const PaginaPrincipal = () => {
  return (
    <>
      <CarouselC />
      <div className="container">
        <div className="row">
          <CardC />
          <CardC />
          <CardC />
          <CardC />
          <CardC />
          <CardC />
        </div>
      </div>
    </>
  );
};

export default PaginaPrincipal;
