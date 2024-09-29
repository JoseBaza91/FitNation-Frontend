import CardC from "../components/CardC";
import CarruselC from "../components/CarruselC";

const PaginaPrincipal = () => {
  return (
    <>
      <CarruselC />
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
