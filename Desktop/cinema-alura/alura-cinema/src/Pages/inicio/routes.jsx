import Inicio from ".";
import Favoritos from "../Favoritos/index"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "../Player";
import NotFound from "../NotFound";
import PaginaBase from "../../Components/PaginaBase";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<PaginaBase/>}>
          <Route index element={<Inicio />}></Route>
          <Route path="Favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          </Route>
        </Routes>
       
    </BrowserRouter>
  );
};

export default AppRoutes;
