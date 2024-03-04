import React, { useEffect, useState } from 'react';
import HeaderVendas from "../../components/header/index";
import './contratos.css';
import 'react-toastify/dist/ReactToastify.css';
import FormularioContratos from '../../components/formulario-pendente';
import { headerVendas } from '../../entities/headers/header-vendas';
import TableComponent from '../../components/table/table';
import { useWebVendedor } from '../../services/api';
import { useNavigate } from 'react-router-dom';


const Contratos = () => {
  const [vendas, setVendas] = useState([]);
  const { getContratos } = useWebVendedor();
  const navigate = useNavigate();

  const handlePesquisar = () => {

  };

  const handleOpenFormulario = (contrato) => {
    navigate('/contratos/contratos-pendentes', { state: { contrato } })
    localStorage.setItem('page-venda', '/contratos-pendentes');
  };

  useEffect(() => {
    getContratos().then((data) => {
      if (data) {
        // Filtra os contratos com status 'Pendente'
        const contratosFinalizados = data.filter((contrato) => contrato.status === 'Pendente');
        setVendas(contratosFinalizados);
      }
    });
  }, []);

  return (
    <div className='container-contratos-vendas'>
      <HeaderVendas />
      <div className='clientes-contrato-venda8'>
        <div className="pesquisa-contrato-venda">
          <input
            placeholder="Informe o nome do cliente"
            value={''}
            onChange={''}
          />
          <button onClick={handlePesquisar}>PESQUISAR</button>
        </div>
        <div className="tabela-contratos-vendas">
          <TableComponent headers={headerVendas} rows={vendas} actionsLabel={["Ações", "Acciones"]} actionCalls={{
            view: (e) => handleOpenFormulario(e)
          }} />
        </div>
      </div>
    </div>
  );
};

export default Contratos;
