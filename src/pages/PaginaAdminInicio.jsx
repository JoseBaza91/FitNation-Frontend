import TableC from "../components/TableC";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const PaginaAdminInicio = () => {
  return (
    <>
    <Container className="mt-3"><h1 id="mensaje-admin">Hola, Administrador</h1></Container>
    <TableC/>
    <Container className="d-flex justify-content-evenly pt-5">
    <Link to="/admin-clases">
    <Button variant="primary">Ir a Clases</Button>
    </Link>
    <Link to="/admin-usuarios">
    <Button variant="primary">Ir a Usuarios</Button>
    </Link>
    </Container>
    </>
  );
};

export default PaginaAdminInicio;
