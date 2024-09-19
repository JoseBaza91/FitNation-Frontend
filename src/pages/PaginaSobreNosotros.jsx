import { Col, Container, Row } from "react-bootstrap";
const PaginaSobreNosotros = () => {
  return (
    <>
      <Container>
        <Col>
          <Row>
            <h1 className="mt-5 pt-55 text-center">FITNATION</h1>
            <div className="text-center mt-5">VA LOGO</div>
            <h4 className="m-5">
              FITNATION te invitan a que disfrutes esta propuesta de
              entrenamiento en la cual buscamos, no sólo el mejor entrenamiento
              en el mejor lugar si no también que puedas disfrutar tu estadía en
              el gimnasio, conociendo gente nueva, disfrútando de nuevos
              momentos y ser parte de nuestra comunidad.. Queremos que estés,
              que lleves tu entrenamiento al máximo nivel junto con nuestros
              profesionales y a su vez tengas el agrado de compartir momentos ,
              con gente nueva que busca lo mismo que vos “ Encontrar la mejor
              versión de uno mismo “ Tenemos todas las opciones para vos, están
              a tu alcance , te esperamos !
            </h4>

            <h3 className="text-center py-5">FITNATION Equipo de Trabajo</h3>

            <section>
              <div>
                <h4 className="text-center mt-5">Nazarena Diaz</h4>
              </div>
              <div>
                <h4 className="text-center mt-5">Jose Baza</h4>
              </div>
              <div>
                <h4 className="text-center mt-5">Juan Pablo de la Vega</h4>
              </div>
              <div>
                <h4 className="text-center mt-5">Alfredo Ruiz</h4>
              </div>
            </section>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default PaginaSobreNosotros;
