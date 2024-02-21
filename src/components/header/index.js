import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './header.css'


const HeaderVendas = () => {
  const [activeRoute, setActiveRoute] = useState(""); // Estado para acompanhar a rota ativa
  const navigate = useNavigate(); // Hook para navegação
  const location = useLocation();

  const handleMenuClick = (route) => {
    // Navegar para a rota específica
    console.log(route)
    navigate(route);
    // Salvar a rota no localStorage
    localStorage.setItem("page-venda", route);
    // Atualizar a rota ativa
    setActiveRoute(route);
  };

  useEffect(() => {
    const savedPage = localStorage.getItem("page-venda");

    if (savedPage && savedPage !== location.pathname) {
      localStorage.removeItem("page-venda");
      setActiveRoute("");
    } else {
      setActiveRoute(savedPage);
    }
  }, [location.pathname]);

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