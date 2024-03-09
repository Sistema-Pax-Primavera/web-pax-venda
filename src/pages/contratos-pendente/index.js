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
import Carregando from "../../components/carregando";

const Contratos = () => {
  const [vendas, setVendas] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const { getContratos } = useWebVendedor();
  const [clientes, setClientes] = useState([]);

  const handleSearch = () => {
    setLoading(true); // Exibe o componente de carregamento

    if (!searchTerm) {
      getContratos().then((data) => {
        const pendentes = data.filter((contrato) => contrato.status === "Pendente");
        setSearchResult(pendentes);
        setTimeout(() => setLoading(false), 3000); // Oculta o componente de carregamento após 3 segundos
      });
    } else {
      getContratos().then((data) => {
        const pendentesFiltrados = data.filter(
          (contrato) =>
            contrato.status === "Pendente" &&
            contrato.titular.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResult(pendentesFiltrados);
        setTimeout(() => setLoading(false), 3000); // Oculta o componente de carregamento após 3 segundos
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
        const contratosPendentes = data.filter(
          (contrato) => contrato.status === "Pendente"
        );
        setSearchResult(contratosPendentes);
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
          {loading ? (
            <Carregando /> // Exibe o componente de carregamento se loading for true
          ) : (
            <TableComponent
              headers={headerVendas}
              rows={searchResult}
              actionsLabel={["Ações", "Acciones"]}
              actionCalls={{
                view: (e) => handleOpenFormulario(e),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contratos;
