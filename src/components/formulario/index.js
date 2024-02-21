import React, { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DateMaskInput from '../../components/inputs';

const Formulario = ({ dadosContrato = {} }) => {
    const [mostrarFormularioGerais, setMostrarFormularioGerais] = useState(true);
    const [mostrarFormularioCobranca, setMostrarFormularioCobranca] = useState(false);
    const [mostrarFormularioDependentes, setMostrarFormularioDependentes] = useState(false);
    const [mostrarFormularioAnexos, setMostrarFormularioAnexos] = useState(false);
    const [dadosCadastrais, setDadosCadastrais] = useState({
        nome: dadosContrato.titular || '',
        dataNascimento: '',
        dataContrato: '',
        cpf: '',
        rg: '',
        profissao: '',
        naturalidade: '',
        nacionalidade: '',
        cep: '',
        uf: '',
        municipio: '',
        bairro: '',
        tipoRua: '',
        rua: '',
        quadra: '',
        lote: '',
        numero: '',
        complemento: '',
        religiao: '',
        estadoCivil: '',
        genero: '',
    });

    const mostrarFormulario = (tipo) => {
        setMostrarFormularioGerais(tipo === 'dados-gerais');
        setMostrarFormularioCobranca(tipo === 'dados-cobranca');
        setMostrarFormularioDependentes(tipo == 'dependentes');
        setMostrarFormularioAnexos(tipo === 'anexos');
    };

    return (

        <div className='container-dependentes'>
            <div className='pet-cremacao-humana'>
                <button
                    className={mostrarFormularioGerais ? '' : 'botao-ativo'}
                    onClick={() => mostrarFormulario('dados-gerais')}
                >
                    <PersonIcon fontSize={'small'} />  Dados Cadastrais
                </button>
                <button
                    className={mostrarFormularioCobranca ? '' : 'botao-ativo'}
                    onClick={() => mostrarFormulario('dados-cobranca')}
                >
                    <PersonIcon fontSize={'small'} /> Dados Cobrança
                </button>
                <button
                    className={mostrarFormularioDependentes ? '' : 'botao-ativo'}
                    onClick={() => mostrarFormulario('dependentes')}
                >
                    <PersonIcon fontSize={'small'} /> Dependentes
                </button>
                <button
                    className={mostrarFormularioAnexos ? '' : 'botao-ativo'}
                    onClick={() => mostrarFormulario('anexos')}
                >
                    <PersonIcon fontSize={'small'} /> Anexos
                </button>
            </div>
            {mostrarFormularioGerais && (
                <div>
                    <div className='layout-linha'>
                        <div className='container-linha'>
                            <div className='campos-01'>
                                <label>Nome</label>
                                <input
                                    value={dadosCadastrais.nome}
                                    onChange={(e) => setDadosCadastrais({ ...dadosCadastrais, nome: e.target.value })}
                                />
                            </div>
                            <div className='campos-02'>
                                <label>Data Nascimento</label>
                                <DateMaskInput />
                            </div>
                            <div className='data-filiacao-03'>
                                <label>Data Filiação</label>
                                <DateMaskInput />
                            </div>
                            <div className='campos-03'>
                                <label>Peso</label>
                                <input></input>
                            </div>
                            <div className='campos-03'>
                                <label>Altura</label>
                                <input></input>
                            </div>
                            <div className='campos-03'>
                                <label>Cor</label>
                                <input></input>
                            </div>

                        </div>
                        <div className='container-linha'>
                            <div className='campos-02'>
                                <label>Espécie</label>
                                <select></select>
                            </div>
                            <div className='campos-02'>
                                <label>Raça</label>
                                <select></select>
                            </div>
                            <div className='campos-02'>
                                <label>Porte</label>
                                <select></select>
                            </div>
                            <div className='campos-02'>
                                <label>Modalidade</label>
                                <select></select>
                            </div>

                            <div className='campos-02'>
                                <label> Falecimento</label>
                                <DateMaskInput />
                            </div>

                            <div className='salva-dependentes'>
                                <button>SALVAR</button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
            {mostrarFormularioCobranca && (
                <div>
                    <div className='layout-linha'>
                        <div className='container-linha'>
                            <div className='campos-01'>
                                <label>Nome</label>
                                <input></input>
                            </div>
                            <div className='campos-02'>
                                <label>Data Nascimento</label>
                                <DateMaskInput />
                            </div>
                            <div className='data-filiacao-03'>
                                <label>Data Filiação</label>
                                <DateMaskInput />
                            </div>
                            <div className='campos-02'>
                                <label>CPF</label>
                                <input></input>
                            </div>
                            <div className='campos-02'>
                                <label>Parentesco</label>
                                <select></select>
                            </div>

                        </div>
                        <div className='container-linha'>
                            <div className='campos-04'>
                                <label>Status</label>
                                <input></input>
                            </div>
                            <div className='campos-02'>
                                <label>Valor Adicional</label>
                                <input></input>
                            </div>
                            <div className='campos-02'>
                                <label> Falecimento</label>
                                <DateMaskInput />
                            </div>

                            <div className='salva-dependentes'>
                                <button>SALVAR</button>
                            </div>

                        </div>
                        <div className='container-linha'>
                            <div className='campos-legenda'>
                                <div className='legenda-cremacao'>
                                    <div className='legenda-amarela'></div>
                                    <label>Em Carência</label>
                                    <div className='legenda-roxa'></div>
                                    <label>Falecido</label>
                                    <div className='legenda-laranja'></div>
                                    <label>Filho com 21 Anos</label>
                                    <div className='legenda-vermelho'></div>
                                    <label>Inativo ou Promovido</label>
                                    <div className='legenda-ativo'></div>
                                    <label>Ativo</label>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            )}
        </div>
    );
};

export default Formulario;
