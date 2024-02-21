import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import './header.css'


const HeaderVendas = () => {
  const [activeRoute, setActiveRoute] = useState(""); // Estado para acompanhar a rota ativa
  const navigate = useNavigate(); // Hook para navegação
  const cliente = ''; // Suponha que a variável cliente seja definida

  // Função para lidar com o clique nos botões de menu
  const handleMenuClick = (route) => {
    // Navegar para a rota específica
    navigate(route);
    // Atualizar a rota ativa
    setActiveRoute(route);
  };

  return (
    <div className='navegacao-vendas'>
      <button
        onClick={() => handleMenuClick("/contratos")}
        className={activeRoute === "/contratos" ? "active" : ""}
      >
        Contratos
      </button>
      <button
        onClick={() => handleMenuClick("/contratos-finalizados")}
        className={activeRoute === "/contratos-finalizados" ? "active" : ""}
      >
        Contratos Finalizados
      </button>
    </div>
  );
};

export default HeaderVendas;