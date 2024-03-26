import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendas from "../pages/vendas";
import Contratos from "../pages/contratos-pendente";
import ContratosFinalizados from "../pages/contratos-finalizados"
import Cadastro from "../pages/cadastro";
import FormularioContratos from "../components/formulario-pendente";
import FormularioContratosFinalizados from "../components/formulario-finalizado";
import PosVenda from "../pages/pos-venda";
import Cancelamento from "../pages/cancelamento";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/vendas">
        <Routes>
            <Route exact path="*" element={<Vendas />} />
            <Route exact path="/contratos" element={<Contratos />} />
            <Route exact path="/contratos/contratos-pendentes" element={<FormularioContratos />} />
            <Route exact path="/contratos-finalizados" element={<ContratosFinalizados />} />
            <Route exact path="/contratos-finalizados/contrato-finalizado" element={<FormularioContratosFinalizados />} />
            <Route exact path="/cadastro" element={<Cadastro />} />
            <Route exact path="/pos-venda" element={<PosVenda />} />
            <Route exact path="/cancelamento" element={<Cancelamento />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;