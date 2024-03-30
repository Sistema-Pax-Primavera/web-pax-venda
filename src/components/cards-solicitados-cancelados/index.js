import React, { useState } from "react";
import "./cards-solicitacoes-cobradores.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ButtonIconTextoStart from "../button-icon-texto-start";
import PlaceIcon from '@mui/icons-material/Place';

const CardsSolicitadosCancelados = ({ solicitationNumber, name, date, unit, reason }) => {
  return (
    <div className="card-soli-cobrad">
      <div className="numero-soli-nome">
        <label>Solicitação {solicitationNumber}</label>
        <p>{name}</p>
      </div>
      <div className="primeira-categoria-soli">
        <div className="duas-categorias-solicitacoes">
          <CalendarMonthIcon fontSize={"medium"} />
          <div className="categoria-resul-soli">
            <label>Data</label>
            <p>{date}</p>
          </div>
        </div>
        <div className="duas-categorias-solicitacoes">
          <PlaceIcon fontSize={"medium"} />
          <div className="categoria-resul-soli">
            <label>Unidade</label>
            <p>{unit}</p>
          </div>
        </div>
      </div>
      <label>Motivo</label>
      <p>{reason}</p>
      <div className="aceita-regeita-soli-cob2">
        <div className="buttaos-soli">
          <ButtonIconTextoStart
            title={"ABRIR CONTRATO"}
            fontSize="10"
            fontWeightBotao="700"
            corFundoBotao="#006b33"
            corTextoBotao="#ffff"
          />
        </div>
       

       
      </div>
    </div>
  );
};

export default CardsSolicitadosCancelados;
