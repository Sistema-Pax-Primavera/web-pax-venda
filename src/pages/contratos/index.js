import React, { useState } from 'react';
import HeaderVendas from "../../components/header/index";
import './contratos.css';
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

function createData(id, nome, vendedor, unidade, data, tipo, status) {
  return { id, nome, vendedor, unidade, data, tipo, status };
}

const rows = [
  createData(1, 'Mateus Pitta', 'Sonia Souza', 'Dourados', '02/05/2024', 'Contrato Novo', 'Pendente'),
  createData(2, 'Giovane Luna', 'Zacarias Juventude', 'Dourados', '03/05/2024', 'Contrato Novo', 'Pendente'),
  createData(3, 'Diogo Perez', 'Luzia Souza', 'Rio Brilhante', '04/05/2024', 'Contrato Novo', 'Pendente'),
  createData(3, 'Marcos Lopes', 'Luzia Souza', 'Rio Brilhante', '04/05/2024', 'Contrato Novo', 'Pendente')
];

const Contratos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [contratoSelecionado, setContratoSelecionado] = useState(null);
  const [showFormulario, setShowFormulario] = useState(false);

  const handleSearch = () => {
    setShowTable(false); // Ocultar a tabela
    setShowLoading(true);

    setTimeout(() => {
      const filteredResults = rows.filter(row =>
        row.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredResults);
      setShowLoading(false); // Ocultar o componente de carregamento
      setShowTable(true); // Mostrar a tabela após 3 segundos
    }, 3000); // Definir um atraso de 3 segundos
  };

  const handleOpenFormulario = (contrato) => {
    setContratoSelecionado(contrato);
    setShowTable(false);
    setShowLoading(false);
    setShowFormulario(true);
  };

  const handleCloseFormulario = () => {
    setShowFormulario(false);
    setContratoSelecionado(null);
  };

  return (
    <div className='container-contratos-vendas'>
      <HeaderVendas />
      <div className='clientes-contrato-venda'>
        <div className='pesquisa-contrato-venda'>
          <input
            placeholder='Informe o nome do cliente'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>PESQUISAR</button>
        </div>

        {!showLoading && !showTable && !showFormulario && (
          <div className='imagem-pesquisa'>
            <img src={Pesquisa} alt="Ícone de pesquisa" />
          </div>
        )}

        {showLoading &&
          <div className='carregando-projetos'>
            <Carregando />
          </div>
        } {/* Renderizar o componente de carregamento se showLoading for verdadeiro */}

        {showTable && (
          <div className='tabela-contratos-vendas'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Titular</TableCell>
                    <TableCell align="left">Vendedor</TableCell>
                    <TableCell align="left">Unidade</TableCell>
                    <TableCell align="left">Data</TableCell>
                    <TableCell align="left">Tipo</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Opções</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {searchResults.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.nome}
                      </TableCell>
                      <TableCell align="left">{row.vendedor}</TableCell>
                      <TableCell align="left">{row.unidade}</TableCell>
                      <TableCell align="left">{row.data}</TableCell>
                      <TableCell align="left">{row.tipo}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="center">
                        <div className='abrir-contrato'>
                          <button onClick={() => handleOpenFormulario(row)}>ABRIR</button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

        )}
        {showFormulario && contratoSelecionado && (
          <div className='formulario-cliente'>
            <Formulario dadosContrato={contratoSelecionado} onClose={handleCloseFormulario} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contratos;
