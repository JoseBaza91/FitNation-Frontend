import { Col, Container, Row } from "react-bootstrap";
import TableC from "../components/TableC";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const PaginaAdminInicio = () => {
  return (
    <>
    <Container><h1 id="mensaje-admin">Hola, Administrador</h1></Container>
    <TableC/>
    <Container class="d-flex justify-content-between pe-5 ps-5">
      <Link to="/admin-clases">
    <Button variant="primary" size="lg">Ir a Clases</Button>{' '}
    </Link>
    <Link to="/admin-usuarios">
    <Button variant="primary" size="lg">Ir a Usuarios</Button>{' '}
    </Link>
    </Container>
    </>
  );
};

export default PaginaAdminInicio;
