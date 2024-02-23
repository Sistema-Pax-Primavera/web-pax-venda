import React, { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DateMaskInput from '../../components/inputs';
import './formulario.css'
import Switch from '@mui/material/Switch';
import PetsIcon from '@mui/icons-material/Pets';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TaskIcon from '@mui/icons-material/Task';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { saveAs } from 'file-saver';
import FormularioConfirmacao from '../formulario-confirmacao';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function createData(name, filiacao, carencia, falecimento, valor, especie) {
    return { name, filiacao, carencia, falecimento, valor, especie };
}

const rows = [
    createData('Tor', '15/01/2023', '15/01/2025', '00/00/0000', '100,00', "Gator"),
];

const Formulario = ({ dadosContrato = {} }) => {
    const [mostrarFormularioGerais, setMostrarFormularioGerais] = useState(true);
    const [mostrarFormularioCobranca, setMostrarFormularioCobranca] = useState(false);
    const [mostrarFormularioDependentes, setMostrarFormularioDependentes] = useState(false);
    const [mostrarFormularioAnexos, setMostrarFormularioAnexos] = useState(false);
    const [arquivos, setArquivos] = useState([]);
    const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
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

    const [formularioAtivo, setFormularioAtivo] = useState('humano');

    const alternarFormulario = (formulario) => {
        setFormularioAtivo(formulario);
    };


    const handleProcurarChange = (event) => {
        setArquivoSelecionado(event.target.files[0]);
    };

    const handleAnexarClick = () => {
        if (arquivoSelecionado) {
            setArquivos([...arquivos, arquivoSelecionado]);
            setArquivoSelecionado(null); // Limpar o arquivo selecionado após anexar
        }
    };

    const handleExcluirClick = (index) => {
        const novosArquivos = [...arquivos];
        novosArquivos.splice(index, 1);
        setArquivos(novosArquivos);
    };

    const handleDownloadClick = (arquivo) => {
        saveAs(arquivo, arquivo.name);  // Utilizar a função saveAs para fazer o download
    };

    const [checkboxStatus, setCheckboxStatus] = useState({
        dadosGerais: false,
        cobranca: false,
        dependentes: false,
        anexos: false
    });

    const handleCheckboxUpdate = (campo) => {
        setCheckboxStatus(prevState => ({
            ...prevState,
            [campo]: true
        }));
    };

    const handleSalvarClick = () => {
        // Lógica para salvar os dados gerais
    
        // Atualizar o estado da checkbox de dados gerais
        handleCheckboxUpdate('dadosGerais');
    };
    
    const handleSalvarCobranca = () => {
        // Lógica para salvar os dados de cobrança
    
        // Atualizar o estado da checkbox de cobrança
        handleCheckboxUpdate('cobranca');
    };
    
    const handleSalvarDependentes = () => {
        // Lógica para salvar os dados dos dependentes
    
        // Atualizar o estado da checkbox de dependentes
        handleCheckboxUpdate('dependentes');
    };

    const handleSalvarAnexo = () => {
        // Lógica para salvar os anexos
    
        // Atualizar o estado da checkbox de anexos
        handleCheckboxUpdate('anexos');
    };
    return (

        <div className='container-contrato-cards'>
            <div className='formulario-confirma-cadastros'>
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
                                <div className='campos-02-contrato'>
                                    <label>Data Nascimento</label>
                                    <DateMaskInput />
                                </div>
                                <div className='data-filiacao-contrato'>
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
                                    <button onClick={handleSalvarClick}>SALVAR</button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
                {mostrarFormularioCobranca && (
                    <div>
                        <div className='layout-linha-contrato'>
                            <div className='container-linha'>
                                <div className='campos-cadastrais-02-contrato'>
                                    <label>Dia de Pagamento </label>
                                    <input></input>
                                </div>
                                <div className='campos-cadastrais-02'>
                                    <label>Primeria Parcela</label>
                                    <DateMaskInput />
                                </div>
                                <div className='campos-cadastrais-03-contrato'>
                                    <label>Ordem Rota</label>
                                    <input></input>
                                </div>
                                <div className='campos-cadastrais-04'>
                                    <label>Contrato</label>
                                    <input></input>
                                </div>
                                <div className='campos-cadastrais-02'>
                                    <label>Plano</label>
                                    <select></select>
                                </div>
                                <div className='campos-cadastrais-06'>
                                    <label>Região</label>
                                    <select></select>
                                </div>
                            </div>
                            <div className='container-linha'>
                                <div className='campos-cadastrais-04'>
                                    <label>Transferido</label>
                                    <Switch {...label} size="small" />
                                </div>
                                <div className='campos-cadastrais-02'>
                                    <label>Pagar Adesão</label>
                                    <Switch {...label} size="small" />
                                </div>
                                <div className='salvar-associado-contrato'>
                                    <button onClick={handleSalvarCobranca}>SALVAR</button>
                                </div>
                            </div>

                        </div>

                    </div>

                )
                }
                {mostrarFormularioDependentes && (
                    <div className='tabela-info-contrato'>
                        <div className='dependente-pet-humano'>
                            {formularioAtivo === 'humano' && (
                                <div className='layout-linha-contrato2'>
                                    <div className='container-linha'>
                                        <div className='campos-01-contrato '>
                                            <label>Nome</label>
                                            <input></input>
                                        </div>
                                        <div className='campos-02-contrato'>
                                            <label>Data Nascimento</label>
                                            <DateMaskInput />
                                        </div>
                                        <div className='data-filiacao-contrato'>
                                            <label>Data Filiação</label>
                                            <DateMaskInput />
                                        </div>
                                        <div className='campos-02-contrato'>
                                            <label>CPF</label>
                                            <input></input>
                                        </div>


                                    </div>
                                    <div className='container-linha'>
                                        <div className='campos-02-contrato'>
                                            <label>Status</label>
                                            <input></input>
                                        </div>
                                        <div className='campos-02-contrato'>
                                            <label>Valor Adicional</label>
                                            <input></input>
                                        </div>
                                        <div className='campos-02-contrato'>
                                            <label> Falecimento</label>
                                            <DateMaskInput />
                                        </div>
                                        <div className='campos-02'>
                                            <label>Parentesco</label>
                                            <select></select>
                                        </div>
                                        <div className='salva-dependentes'>
                                            <button onClick={handleSalvarDependentes}>SALVAR</button>
                                        </div>

                                    </div>
                                    <div className='container-linha'>
                                        <div className='campos-legenda-contrato'>
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
                            )}
                            {formularioAtivo === 'pet' && (
                                <div className='layout-linha-contrato2'>
                                    <div className='container-linha'>
                                        <div className='campos-01'>
                                            <label>Nome</label>
                                            <input></input>
                                        </div>
                                        <div className='campos-data-contrato2'>
                                            <label>Data Nascimento</label>
                                            <DateMaskInput />
                                        </div>
                                        <div className='campos-data-contrato'>
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
                                            <button onClick={handleSalvarDependentes}>SALVAR</button>
                                        </div>
                                    </div>
                                    <div className='container-linha'>
                                        <div className='campos-legenda-contrato'>
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
                            )}
                            <div className='button-pet-humano'>
                                <button onClick={() => alternarFormulario('pet')}>
                                    <PetsIcon fontSize={'small'} /> PET
                                </button>
                                <button onClick={() => alternarFormulario('humano')}>
                                    <AccessibilityNewIcon fontSize={'small'} />HUMANO
                                </button>
                            </div>

                        </div>
                        <div className='container-linha2'>
                            <TableContainer component={Paper}>
                                <Table sx={{ maxWidth: 900 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Nome</TableCell>
                                            <TableCell align="center">Filiação</TableCell>
                                            <TableCell align="center">Fim Carência</TableCell>
                                            <TableCell align="center">Falecimento</TableCell>
                                            <TableCell align="center">Valor</TableCell>
                                            <TableCell align="center">Espécie</TableCell>
                                            <TableCell align="center">Opções</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center">{row.filiacao}</TableCell>
                                                <TableCell align="center">{row.carencia}</TableCell>
                                                <TableCell align="center">{row.falecimento}</TableCell>
                                                <TableCell align="center">{row.valor}</TableCell>
                                                <TableCell align="center">{row.especie}</TableCell>
                                                <TableCell align="center">
                                                    <div className='botao-opcao'>
                                                        <div className='edit-botao'>
                                                            <button><ModeEditOutlineIcon fontSize={'small'} /></button>
                                                        </div>
                                                        <div className='delete-botao'>
                                                            <button><DeleteForeverIcon fontSize={'small'} /></button>
                                                        </div>

                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                    </div>
                )
                }
                {mostrarFormularioAnexos && (
                    <div>
                        <div className='layout-linha'>
                            <div className='container-contratos'>
                                <div className='tipo-contrato-associado'>
                                    <div className='container-contratos'>
                                        <div className='tipo-contrato-associado'>
                                            <div className='contrato-associados-anexo'>
                                                <label>Adicionar</label>
                                                <div className='document'>
                                                    <a>
                                                        <PostAddIcon fontSize={'large'} />
                                                    </a>
                                                    <input type="file" onChange={handleProcurarChange} />
                                                    <button onClick={handleAnexarClick}>ANEXAR</button>
                                                </div>
                                            </div>

                                            <div className='document2'>
                                                {arquivos.map((arquivo, index) => (
                                                    <div key={index}>
                                                        <div className='contrato-associados'>
                                                            <TaskIcon />
                                                            <label> {arquivo.name}</label>
                                                            <div className='baixa-delete-contrato'>
                                                                <div className='deleta-contrato'>
                                                                    <button onClick={() => handleExcluirClick(index)}><DeleteIcon fontSize={'small'} /></button>
                                                                </div>
                                                                <div className='baixa-contrato'>
                                                                    <button onClick={() => handleDownloadClick(arquivo)}><DownloadIcon fontSize={'small'} /></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ul></ul>
                                    </div>
                                </div>
                            </div>
                            <div className='salva-anexo-formulario'>
                            <button onClick={handleSalvarAnexo}>SALVAR</button>
                        </div>
                        </div>
                        
                    </div>
                )}
                
            </div >
            <div className='formulario2-confirmacao'>
            <FormularioConfirmacao checkboxStatus={checkboxStatus} />
            <ToastContainer />

            </div>
        </div>
    );
};

export default Formulario;
