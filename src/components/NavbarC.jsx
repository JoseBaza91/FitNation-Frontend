import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarC = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-warning border border-dark">
      <Container>
      <Navbar.Brand>
            <img
              src="/FitNation.png"
              width="125"
              height="125"
              className="d-inline-block align-top"
              alt="Logo de FitNation Gimnasio"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-5">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="sobre-nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link href="contacto">Contáctanos</Nav.Link>
            <Nav.Link href="turnos">Reservar Turno</Nav.Link>
            <Nav.Link href="admin-inicio">Panel Administrador</Nav.Link>
          </Nav>
          <Nav className="me-right fs-5">
            <Nav.Link href="iniciar-sesion">Iniciar Sesión</Nav.Link>
            <Nav.Link href="registro">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavbarC;
