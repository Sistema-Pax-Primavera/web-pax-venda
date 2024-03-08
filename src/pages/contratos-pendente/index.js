import React, { useEffect, useState } from "react";
import HeaderVendas from "../../components/header/index";
import "./contratos.css";
import "react-toastify/dist/ReactToastify.css";
import FormularioContratos from "../../components/formulario-pendente";
import { headerVendas } from "../../entities/headers/header-vendas";
import TableComponent from "../../components/table/table";
import { useWebVendedor } from "../../services/api";
import { useNavigate } from "react-router-dom";
import ButtonText from "../../../../pax-associado/src/components/button-texto/index";

const Contratos = () => {
  const [vendas, setVendas] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getContratos } = useWebVendedor();
  const [clientes, setClientes] = useState([]);

  const handleSearch = () => {
    setLoading(true);
    if (!searchTerm) {
      getContratos().then((data) =>{
        const pendentes = data.filter(contrato => contrato.status === "Pendente");
        setSearchResult(pendentes);
        setLoading(false);
      });
    } else {
      getContratos().then((data) => {
        const pendentesFiltrados = data.filter(contrato =>
          contrato.status === "Pendente" &&
          contrato.titular.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResult(pendentesFiltrados);
        setLoading(false);
      });
    }
  };
  
  

  const handleOpenFormulario = (contrato) => {
    navigate("/contratos/contratos-pendentes", { state: { contrato } });
    localStorage.setItem("page-venda", "/contratos-pendentes");
  };

  useEffect(() => {
    getContratos().then((data) => {
      if (data) {
        // Filtra os contratos com status 'Pendente'
        const contratosFinalizados = data.filter(
          (contrato) => contrato.status === "Pendente"
        );
        setVendas(contratosFinalizados);
      }
    });
  }, []);

  return (
    <div className="container-contratos-vendas">
      <HeaderVendas />
      <div className="clientes-contrato-venda8">
        <div className="pesquisa-contrato-venda">
        <input
            placeholder="Informe o nome do cliente"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="pesquisa-contrato-button">
          <ButtonText title="PESQUISAR" funcao={() => handleSearch()} />
          </div>
        </div>
        <div className="tabela-contratos-vendas">
          <TableComponent
            headers={headerVendas}
            rows={searchResult}
            actionsLabel={["Ações", "Acciones"]}
            actionCalls={{
              view: (e) => handleOpenFormulario(e),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contratos;
