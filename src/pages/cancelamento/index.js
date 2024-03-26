import React, { useState } from "react";
import "./cancelamento.css";
import HeaderVendas from "../../components/header";
import ButtonText from "../../../../pax-associado/src/components/button-texto";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonIconTextoStart from "../../components/button-icon-texto-start";
import SolicitacoesCanceladas from "../../components/solicitacoes-canceladas";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ErrorIcon from "@mui/icons-material/Error";
import SearchIcon from "@mui/icons-material/Search";
import CardsSolicitadosCancelados from "../../components/cards-solicitados-cancelados";

function createData(name, usuario, unidade, data, motivo) {
  return { name, usuario, unidade, data, motivo };
}

const rows = [
  createData(
    "Rosimeira Aparecida",
    "Sonia Maria Martins",
    "Rio Brilhante",
    "07/02/2024",
    "Cansei"
  ),
  createData(
    "Ildo Jose Reckziegel",
    "Jamilly Soares De Araujo",
    "Ponta Pora",
    "07/02/2024",
    "Sem dinheiro"
  ),
  createData(
    "Edson Dias Guimaraes",
    "Tainara Ribeiro Brag",
    "Rio Brilhante",
    "07/02/2024",
    "Mudou de país"
  ),
];

const Cancelamento = () => {
  const [mostrarSolicitacoes, setMostrarSolicitacoes] = useState(false);

  const handleClickAbrir = () => {
    setMostrarSolicitacoes(true);
  };
  return (
    <div className="container-contratos-vendas">
      <HeaderVendas />
      {mostrarSolicitacoes ? (
        <div className="duas-colunas-cancelamento">
          <div className="colunas-cancelamento1">
            <label>
              <AnnouncementIcon fontSize={"small"} /> Solicitações
            </label>
            <SolicitacoesCanceladas />
          </div>
          <div className="colunas-cancelamento1">
            <label>
              <ErrorIcon fontSize={"small"} /> Cancelados
            </label>
            <div className="procura-cancelados">
              <input placeholder="Pesquisar"></input>
              <div>
              <ButtonIconTextoStart
                icon={<SearchIcon fontSize={"small"} />}
                corFundoBotao={"#006b33"}
                corTextoBotao={"#ffff"}
              />
              </div>
            </div>
            <CardsSolicitadosCancelados />
          </div>
        </div>
      ) : (
        <div className="container-cancelamento">
          <div className="pesquisa-pos-venda">
            <input placeholder="Informe o nome do cliente"></input>
            <div className="botao-pesquisa-pos-venda">
              <ButtonText title={"PESQUISAR"} />
            </div>
          </div>
          <div className="tabela-pos-venda">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Titular</TableCell>
                    <TableCell align="start" sx={{ fontSize: 12 }}>
                      Usuário
                    </TableCell>
                    <TableCell align="start" sx={{ fontSize: 12 }}>
                      Unidades
                    </TableCell>
                    <TableCell align="start" sx={{ fontSize: 12 }}>
                      Data
                    </TableCell>
                    <TableCell align="start" sx={{ fontSize: 12 }}>
                      Motivo
                    </TableCell>
                    <TableCell align="center" sx={{ fontSize: 12 }}>
                      Opções
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="start" sx={{ fontSize: 12 }}>
                        {row.usuario}
                      </TableCell>
                      <TableCell align="start" sx={{ fontSize: 12 }}>
                        {row.unidade}
                      </TableCell>
                      <TableCell align="start" sx={{ fontSize: 12 }}>
                        {row.data}
                      </TableCell>
                      <TableCell align="start" sx={{ fontSize: 12 }}>
                        {row.motivo}
                      </TableCell>
                      <TableCell align="center">
                        <div>
                          <ButtonIconTextoStart
                            title={"ABRIR"}
                            corFundoBotao={"#006b33"}
                            corTextoBotao={"#ffff"}
                            fontWeightBotao={700}
                            funcao={handleClickAbrir}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cancelamento;
