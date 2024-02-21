import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendas from "./pages/vendas";
import Contratos from "./pages/contratos";
import ContratosFinalizados from "./pages/contratos-finalizados"

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/vendas">
        <Routes>
            <Route exact path="*" element={<Vendas />} />
            <Route exact path="/contratos" element={<Contratos />} />
            <Route exact path="/contratos-finalizados" element={<ContratosFinalizados />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;