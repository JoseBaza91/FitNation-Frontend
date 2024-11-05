import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormsC = () => {
  return (
    <>
    <Form className="p-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" required placeholder="Ingrese su correo." minlength="6" maxlength="254" />
        <Form.Text className="text-muted">
          Su información es confidencial y no será compartida.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Control type="text" placeholder="Nombre y Apellido aquí. NO USAR NÚMEROS O CARÁCTERES ESPECIALES." pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$" maxlength="50" required/>
      </Form.Group>
      <Form.Group classname="mb-3" controlId="formBasicSelect">
        <Form.Text>Elija su plan aquí</Form.Text>
      <Form.Select aria-label="Seleccionar Plan">
      <option value="1">Solo Musculación</option>
      <option value="2">Solo Clases</option>
      <option value="3">Full</option>
    </Form.Select>
      </Form.Group>
      <Button className="mt-3" variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </>
  );
};

export default FormsC;
