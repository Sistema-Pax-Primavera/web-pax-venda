import React from 'react';
import Formulario from '../../components/formulario';
import HeaderVendas from '../../components/header';
import './cadastro.css'
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckboxWhite from '../../components/checkbox/index'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Cadastro = () => {
    return (
        <div className='container-contratos-vendas'>
            <HeaderVendas />
            <div className='formulario-cadastro-contrato'>
                <Formulario dadosIniciais={{}} />
                <div className='confirmacao-contrato'>
                    <div className='tipo-contrato-data'>
                        <div className='separacao-contrato'>
                            <ArticleIcon fontSize={'small'}/>
                            <div className='tipo-contrato-novo'>
                                <label>Contrato Novo</label>
                                <label>Tipo</label>
                            </div>
                        </div>

                        <div className='separacao-contrato'>
                            <CalendarMonthIcon fontSize={'small'}/>
                            <div className='tipo-contrato-novo'>
                                <label>22/05/2024</label>
                                <label>Data Contrato</label>
                            </div>
                        </div>
                    </div>
                    <div className='confirmados-contratos'>
                        <label>Confimados</label>
                    </div>
                    <div className='confirmados-contratos'>
                        <label><CheckboxWhite/> Dados Gerais</label>
                    </div>
                    <div className='confirmados-contratos'>
                        <label><CheckboxWhite/> Cobrança</label>
                    </div>
                    <div className='confirmados-contratos'>
                        <label><CheckboxWhite/> Titular</label>
                    </div>
                    <div className='confirmados-contratos'>
                        <label><CheckboxWhite/> Dependentes</label>
                    </div>
                    <div className='confirmados-contratos'>
                       <button>CADASTRAR</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cadastro;
