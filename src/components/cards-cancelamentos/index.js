import React, { useState } from "react";
import "./cards-solicitacoes-cobradores.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ButtonIconTextoStart from "../button-icon-texto-start";
import PlaceIcon from '@mui/icons-material/Place';
const CardsCarncelamentos = () => {
  return (
    <div className="card-soli-cobrad">
      <div className="numero-soli-nome">
        <label>Solicitação 01</label>
        <p>Carlos Henrique</p>
      </div>
      <div className="primeira-categoria-soli">
        <div className="duas-categorias-solicitacoes">
          <CalendarMonthIcon fontSize={"medium"} />
          <div className="categoria-resul-soli">
            <label>Data</label>
            <p>20/05/2023</p>
          </div>
        </div>
        <div className="duas-categorias-solicitacoes">
          <PlaceIcon fontSize={"medium"} />
          <div className="categoria-resul-soli">
            <label>Unidade</label>
            <p>Dourados</p>
          </div>
        </div>
      </div>
      <label>Motivo</label>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's.
      </p>
      <div className="aceita-regeita-soli-cob">
        <div className="buttaos-soli">
          <ButtonIconTextoStart
            title={"ACEITAR"}
            icon={<AddTaskOutlinedIcon fontSize={"small"} />}
            fontSize="10"
            fontWeightBotao="700"
            corFundoBotao="#006b33"
            corTextoBotao="#ffff"
          />
        </div>
        <div className="buttaos-soli">
          <ButtonIconTextoStart
            title={"REJEITAR"}
            icon={<HighlightOffOutlinedIcon fontSize={"small"} />}
            fontSize="10"
            fontWeightBotao="700"
            corFundoBotao="#FF0000"
            corTextoBotao="#ffff"
          />
        </div>

       
      </div>
    </div>
  );
};

export default CardsCarncelamentos;
