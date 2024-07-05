import Cabecera from "../Cabecera/cabecera";
import Pie from "../Pie/pie";
import { FavoritoProvider } from "../../Context/Favoritos";
import Contenedor from "../Container";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <>
      <Cabecera />
      <Contenedor>
        <FavoritoProvider>
          <Outlet />
        </FavoritoProvider>
      </Contenedor>
      <Pie />
    </>
  );
}

export default PaginaBase