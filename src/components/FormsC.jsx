import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Asegúrate de tener axios instalado
import Swal from "sweetalert2";
import "../css/FormC.css";

const FormC = ({ idPagina }) => {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    nombre: "",
    apellido: "",
    usuario: "",
    contrasenia: "",
    rcontrasenia: "",
    telefono: "",
    plan: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (ev) => {
    setFormRegister({ ...formRegister, [ev.target.name]: ev.target.value });
    setErrores({ ...errores, [ev.target.name]: false });
  };

  const validateForm = () => {
    const newErrores = {};
    const {
      usuario,
      contrasenia,
      rcontrasenia,
      telefono,
      plan,
      nombre,
      apellido,
    } = formRegister;

    if (!nombre) newErrores.nombre = true;
    if (!apellido) newErrores.apellido = true;
    if (!usuario) newErrores.usuario = true;
    if (!contrasenia) newErrores.contrasenia = true;
    if (!rcontrasenia) newErrores.rcontrasenia = true;
    if (!telefono) newErrores.telefono = true;
    if (!plan) newErrores.plan = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (usuario && !emailRegex.test(usuario)) {
      newErrores.usuario = true;
      Swal.fire(
        "Error",
        "El usuario debe tener un correo electrónico válido.",
        "error"
      );
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (contrasenia && !passwordRegex.test(contrasenia)) {
      newErrores.contrasenia = true;
      Swal.fire(
        "Error",
        "La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.",
        "error"
      );
    }

    if (rcontrasenia && rcontrasenia !== contrasenia) {
      newErrores.rcontrasenia = true;
      Swal.fire("Error", "Las contraseñas no coinciden.", "error");
    }

    return newErrores;
  };

  const handleClick = async (ev) => {
    ev.preventDefault();
    const validationErrors = validateForm();
    setErrores(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Enviar datos al backend
        const response = await axios.post("/api/registro", formRegister);

        // Almacenar información en sessionStorage
        sessionStorage.setItem("usuario", formRegister.usuario);
        sessionStorage.setItem("plan", formRegister.plan);

        const usuarioExiste = usuarios.find((u) => u.usuario === usuario);
        if (usuarioExiste) {
          return res.status(409).json({ error: "El usuario ya existe" });
        }

        Swal.fire({
          title: "Registro exitoso!",
          text: "Te has registrado correctamente.",
          icon: "success",
          confirmButtonText: "Continuar",
        }).then(() => {
          navigate("/iniciar-sesion");
        });
      } catch (error) {
        console.error("Error al registrar usuario:", error);
        Swal.fire({
          title: "Error",
          text: "No se pudo registrar el usuario. Intenta de nuevo.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } else {
      Swal.fire({
        title: "Error de validación",
        text: "Por favor, corrige los errores en el formulario.",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <Container className="form">
      <Row className="justify-content-center">
        <Col sm={10} md={8} lg={6}>
          <h2 className="title">Regístrate en FITNATION</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                onChange={handleChange}
                className={`input ${errores.nombre ? "is-invalid" : ""}`}
                required
              />
              {errores.nombre && <p className="text-danger">Nombre vacío</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                name="apellido"
                type="text"
                placeholder="Tu apellido"
                onChange={handleChange}
                className={`input ${errores.apellido ? "is-invalid" : ""}`}
                required
              />
              {errores.apellido && (
                <p className="text-danger">Apellido vacío</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                name="usuario"
                type="text"
                maxLength={45}
                placeholder="FitNation@gmail.com"
                onChange={handleChange}
                className={`input ${errores.usuario ? "is-invalid" : ""}`}
                required
              />
              {errores.usuario && (
                <p className="text-danger">E-Mail vacío o inválido</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="contrasenia"
                type="password"
                maxLength={45}
                placeholder="Contraseña"
                onChange={handleChange}
                className={`input ${errores.contrasenia ? "is-invalid" : ""}`}
                required
              />
              {errores.contrasenia && (
                <p className="text-danger">Contraseña vacía</p>
              )}
            </Form.Group>

            {idPagina === "registro" && (
              <Form.Group className="mb-3" controlId="formBasicRPassword">
                <Form.Label>Repetir Contraseña</Form.Label>
                <Form.Control
                  name="rcontrasenia"
                  type="password"
                  maxLength={45}
                  placeholder="Repetir contraseña"
                  onChange={handleChange}
                  className={`input ${
                    errores.rcontrasenia ? "is-invalid" : ""
                  }`}
                  required
                />
                {errores.rcontrasenia && (
                  <p className="text-danger">Repetir contraseña vacía</p>
                )}
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                name="telefono"
                type="tel"
                maxLength={15}
                placeholder="Ingrese su numero de telefono"
                onChange={handleChange}
                className={`input ${errores.telefono ? "is-invalid" : ""}`}
                required
              />
              {errores.telefono && (
                <p className="text-danger">Teléfono vacío</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPlan">
              <Form.Label>Plan a Contratar</Form.Label>
              <Form.Control
                name="plan"
                as="select"
                onChange={handleChange}
                className={`input ${errores.plan ? "is-invalid" : ""}`}
                required
              >
                <option value="">Selecciona un plan</option>
                <option value="basico">Básico</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
              </Form.Control>
              {errores.plan && (
                <p className="text-danger">Selecciona un plan</p>
              )}
            </Form.Group>

            <Button
              variant="warning"
              type="submit"
              className="submit text-center"
              onClick={handleClick}
            >
              {idPagina === "registro" ? "Registrarse" : "Iniciar Sesión"}
            </Button>
            <p className="signin ">
              ¿Ya tienes una cuenta? <a href="#">Iniciar sesión</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormC;
