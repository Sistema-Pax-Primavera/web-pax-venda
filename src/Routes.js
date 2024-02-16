import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendas from "./pages/vendas";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/vendas">
        <Routes>
            <Route exact path="*" element={<Vendas />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;