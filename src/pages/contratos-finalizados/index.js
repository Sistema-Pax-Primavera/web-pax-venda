import React, { useEffect, useState } from 'react';
import HeaderVendas from "../../components/header/index";
import './contratos-finalizados.css';
import Pesquisa from '../../../assets/pesquisa.svg';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Carregando from '../../components/carregando';
import Formulario from '../../components/formulario';
import FormularioConfirmacao from '../../components/formulario-confirmacao';
import FormularioContratosFinalizados from '../../components/form-contratos-fina';
import '../../components/form-contratos-fina/formulario-finalizados.css';


const ContratosFinalizados = () => {
  function createData(id, titular, vendedor, unidade, data, tipo, status) {
    return { id, titular, vendedor, unidade, data, tipo, status };
  }

  const rows = [
    createData(1, 'Carlos Henrique', 'Sonia Souza', 'Dourados', '02/05/2024', 'Contrato Novo', 'Cadastrado'),
    createData(2, 'Luiza Bitencur', 'Zacarias Juventude', 'Dourados', '03/05/2024', 'Contrato Novo', 'Recusado'),
    createData(3, 'Felipe Alencar', 'Luzia Souza', 'Rio Brilhante', '04/05/2024', 'Contrato Novo', 'Cadastro')
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  const [showFormulario, setShowFormulario] = useState(false);
  const [contratoSelecionado, setContratoSelecionado] = useState(null);

  const handleOpenFormulario = (contrato) => {
    setContratoSelecionado(contrato);
    setShowTable(false);
    setShowFormulario(true);
  };

  const handleCloseFormulario = () => {
    setShowFormulario(false);
    setContratoSelecionado(null);
  };

  const handleSearch = () => {
    setShowTable(false); // Ocultar a tabela
    setTimeout(() => {
      const filteredResults = rows.filter(row =>
        row.titular.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredResults);
      setShowLoading(false); // Ocultar o componente de carregamento
      setShowTable(true); // Mostrar a tabela após 3 segundos
    }, 3000); // Definir um atraso de 3 segundos
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      setShowTable(true);
    }, 5000);
  }, []);

  return (
    <div className='container-contratos-vendas'>
      <HeaderVendas />
      <div className='clientes-contrato-venda8'>
        <FormularioContratosFinalizados />
      </div>
    </div>
  );
}

export default ContratosFinalizados
