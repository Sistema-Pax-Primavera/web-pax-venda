import React from "react";
import "./colunas-cobranca.css";
import CardsVenda from "../cards-venda";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import StorageIcon from '@mui/icons-material/Storage';

const ColunasCobranca = ({ titulo, dados, numeros, onCardClick }) => {
  const handleClickCard = (cardData, titulo) => {
    onCardClick(cardData, titulo);
  };
  return (
    <div className="continaer-colunas-vendas-crm">
      <div className="title-filtro-info">
        <label>{titulo}</label>
        <StorageIcon fontSize="inherit" />
        <SyncAltIcon fontSize="inherit" />
        <p>{numeros}</p>
      </div>
      <div class="cards">
        {dados.map((item, index) => (
          <div class="item" key={index} onClick={() => handleClickCard(item, titulo)}>
            <CardsVenda item={item} onClick={onCardClick} tarefas={item.tarefas && item.tarefas.length > 0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColunasCobranca;
