import React, { useEffect, useState } from "react";
import HeaderVendas from "../../components/header/index";
import "./contratos-finalizados.css";
import "../../components/formulario-finalizado/formulario-finalizados.css";
import { headerVendas } from "../../entities/headers/header-vendas";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../components/table/table";
import { useWebVendedor } from "../../services/api";
import ButtonText from "../../../../pax-associado/src/components/button-texto";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContratosFinalizados = () => {
  const [vendasFinalizadas, setVendasFinalizadas] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [clientes, setClientes] = useState([]);
  const { getContratos } = useWebVendedor();

  const handleSearch = () => {
    setLoading(true);
    if (!searchTerm) {
      getContratos().then((data) =>{
        const finalizados = data.filter(contrato => contrato.status === "Finalizado");
        setSearchResult(finalizados);
        setLoading(false);
      });
    } else {
      getContratos().then((data) => {
        const finalizadosFiltrados = data.filter(contrato =>
          contrato.status === "Finalizado" &&
          contrato.titular.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResult(finalizadosFiltrados);
        setLoading(false);
      });
    }
  };
  
  
  
  
  const handleOpenFormulario = (contrato) => {
    navigate("/contratos-finalizados/contrato-finalizado");
    localStorage.setItem(
      "page-venda",
      "/contratos-finalizados/contrato-finalizado"
    );
  };

  useEffect(() => {
    getContratos().then((data) => {
      if (data) {
        // Filtra os contratos com status 'Finalizado'
        const contratosFinalizados = data.filter(
          (contrato) => contrato.status === "Finalizado"
        );
        setVendasFinalizadas(contratosFinalizados);
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

export default ContratosFinalizados;
