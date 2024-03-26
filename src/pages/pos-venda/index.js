import React from "react";
import "./pos-venda.css";
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

function createData(titular, vendedor, unidade, data, tipo,) {
  return { titular, vendedor, unidade, data, tipo, };
}

const rows = [
  createData("Rosimeira Aparecida", "Sonia Maria Martins", "Rio Brilhante", "07/02/2024", "Contrato Novo"),
  createData("Ildo Jose Reckziegel", "Jamilly Soares De Araujo", "Ponta Pora", "07/02/2024", "Transferencia"),
  createData("Edson Dias Guimaraes", "Tainara Ribeiro Brag", "Rio Brilhante", "07/02/2024", "Contrato Novo"),
];

const PosVenda = () => {
  return (
    <div className="container-contratos-vendas">
      <HeaderVendas />
      <div className="container-pos-venda">
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
                  <TableCell sx={{fontSize: 12}}>Titular</TableCell>
                  <TableCell align="start" sx={{fontSize: 12}}>Vendedor</TableCell>
                  <TableCell align="start" sx={{fontSize: 12}}>Unidade</TableCell>
                  <TableCell align="start" sx={{fontSize: 12}}>Data</TableCell>
                  <TableCell align="start" sx={{fontSize: 12}}>Tipo</TableCell>
                  <TableCell align="center" sx={{fontSize: 12}}>Opções</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.titular}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{fontSize: 12}}>
                      {row.titular}
                    </TableCell>
                    <TableCell align="start" sx={{fontSize: 12}}>{row.vendedor}</TableCell>
                    <TableCell align="start" sx={{fontSize: 12}}>{row.unidade}</TableCell>
                    <TableCell align="start" sx={{fontSize: 12}}>{row.data}</TableCell>
                    <TableCell align="start" sx={{fontSize: 12}}>{row.tipo}</TableCell>
                    <TableCell align="ccenter" sx={{fontSize: 12}}>
                      <div>
                        <ButtonIconTextoStart 
                        title={'ABRIR'}
                        corFundoBotao={'#006b33'}
                        corTextoBotao={'#ffff'}
                        fontWeightBotao='700'/>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default PosVenda;
