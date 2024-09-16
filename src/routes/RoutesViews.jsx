import { Routes, Route } from "react-router-dom";
import FooterC from "../components/FooterC";
import NavbarC from "../components/NavbarC";
import PaginaError404 from "../pages/PaginaError404";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import PaginaRegistro from "../pages/PaginaRegistro";
import PaginaLogin from "../pages/PaginaLogin";
import PaginaContacto from "../pages/PaginaContacto";
import PaginaSobreNosotros from "../pages/PaginaSobreNosotros";
import PaginaDetalleDePlanes from "../pages/PaginaDetalleDePlanes";
import PaginaAdminInicio from "../pages/PaginaAdminInicio";
import PaginaAdminClases from "../pages/PaginaAdminClases";
import PaginaAdminUsuarios from "../pages/PaginaAdminUsuarios";
import PaginaReservaTurnos from "../pages/PaginaReservaTurnos";

const RoutesViews = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/turnos" element={<PaginaReservaTurnos />} />
        <Route path="/admin-usuarios" element={<PaginaAdminUsuarios />} />
        <Route path="/admin-clases" element={<PaginaAdminClases />} />
        <Route path="/admin-inicio" element={<PaginaAdminInicio />} />
        <Route path="/detalle-planes" element={<PaginaDetalleDePlanes />} />
        <Route path="/sobre-nosotros" element={<PaginaSobreNosotros />} />
        <Route path="/contacto" element={<PaginaContacto />} />
        <Route path="/iniciar-sesion" element={<PaginaLogin />} />
        <Route path="/registro" element={<PaginaRegistro />} />
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="*" element={<PaginaError404 />} />
      </Routes>
      <FooterC />
    </>
  );
};

export default RoutesViews;
