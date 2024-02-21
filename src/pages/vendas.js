import React from 'react';
import './vendas.css';
import HeaderVendas from '../components/header/index'
import Contratos from '../../assets/contratos.svg'

const Vendas = () => {
    return (
        <div className='container-vendas'>
            <HeaderVendas />
            <div className='dashboard-vendas'>
                <img src={Contratos}></img>
                <h1>Selecione uma opção do menu</h1>
            </div>
            
        </div>

    )
}

export default Vendas;