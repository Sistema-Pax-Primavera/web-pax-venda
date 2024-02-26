import React, { useState } from 'react';
import HeaderVendas from "../../components/header/index";
import './contratos.css';
import 'react-toastify/dist/ReactToastify.css';
import FormularioContratos from '../../components/formulario-contratos';


const Contratos = () => {

  return (
    <div className='container-contratos-vendas'>
      <HeaderVendas />
      <div className='clientes-contrato-venda8'>
        <FormularioContratos/>
      </div>
    </div>
  );
};

export default Contratos;
