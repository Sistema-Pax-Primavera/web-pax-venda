import React from 'react';
import Formulario from '../../components/formulario';
import HeaderVendas from '../../components/header';

const Cadastro = () => {
    return (
        <div className='container-contratos-vendas'>
            <HeaderVendas />
            <Formulario dadosIniciais={{}} />
        </div>
    );
};

export default Cadastro;
