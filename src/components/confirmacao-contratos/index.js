import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Importando a função toast
import 'react-toastify/dist/ReactToastify.css'; // Importando o estilo da biblioteca
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddTaskIcon from '@mui/icons-material/AddTask';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ConfirmacaoContratos = ({ mostrarBotoes, mostrarBotoesConfirmacao, setMostrarBotoesConfirmacao }) => {


    return (
        <div>
            <div className='posicao-formulario-contrato'>
                <div className='tipo-contrato-data'>
                    <div className='separacao-contrato'>
                        <ArticleIcon fontSize={'small'} />
                        <div className='tipo-contrato-novo'>
                            <label>Contrato Novo</label>
                            <label>Tipo</label>
                        </div>
                    </div>

                    <div className='separacao-contrato'>
                        <CalendarMonthIcon fontSize={'small'} />
                        <div className='tipo-contrato-novo'>
                            <label>22/05/2024</label>

                            <label>Data Contrato</label>
                        </div>
                    </div>
                </div>

                <div className='status-contrato'>
                    <label>Status do Contrato</label>
                    <label>Vizualise o anexo(pdf) paraliberar alteração de status!</label>
                </div>

                <div className='confirmados-contratos-contratos'>
                    {mostrarBotoes && !mostrarBotoesConfirmacao && (
                        <div className='confirmados-contratos-contratos'>
                            <button onClick={() => setMostrarBotoesConfirmacao(true)}><AddTaskIcon fontSize={'small'}/></button>
                            <button onClick={() => setMostrarBotoesConfirmacao(true)}><HighlightOffIcon fontSize={'small'} color={'warning'} /></button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ConfirmacaoContratos;
