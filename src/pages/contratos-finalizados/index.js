import React, { useEffect, useState } from "react";
import HeaderVendas from "../../components/header/index";
import "./contratos-finalizados.css";
import "../../components/formulario-finalizado/formulario-finalizados.css";
import { headerVendas } from "../../entities/headers/header-vendas";
import { useNavigate } from "react-router-dom";
import TableComponent from "../../components/table/table";
import { useWebVendedor } from "../../services/api";
import ButtonText from "../../../../pax-associado/src/components/button-texto";

const ContratosFinalizados = () => {
  const [vendasFinalizadas, setVendasFinalizadas] = useState([]);
  const { getContratos } = useWebVendedor();
  const navigate = useNavigate();

  const handlePesquisar = () => {};

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
            value={""}
            onChange={""}
          />
          <div className="pesquisa-contrato-button">
            <ButtonText title="PESQUISAR" funcao={handlePesquisar} />
          </div>
        </div>
        <div className="tabela-contratos-vendas">
          <TableComponent
            headers={headerVendas}
            rows={vendasFinalizadas}
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
