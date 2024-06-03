import React, { useEffect, useState } from "react";
import ColunasCobranca from "../../components/crm/colunas-cobranca";
import "./crm-vendas.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ButtonIcon from "../../../../pax-venda/src/components/button-icon";
import ModalLateral from "../../components/modal-lateral";
import ButtonText from "../../../../pax-venda/src/components/button-texto/index";
import BallotIcon from "@mui/icons-material/Ballot";
import Checkbox from "@mui/material/Checkbox";
import { useVendas } from "../../services/api";
import { toast } from "react-toastify";
import Lead from "../../components/crm/lead";
import ModalCadastro from "../../components/crm/modal-cadastro";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CRMVendas = () => {
    const { getCRMVendas } = useVendas();
    const navigate = useNavigate();
    const colunasDinamicas = {
        "Indicados": { id: 1, clientes: [] },
        "Tentativa de Contato": { id: 2, clientes: [] },
        "Oportunidade de Venda": { id: 3, clientes: [] },
        "Aguardando Contrato": { id: 4, clientes: [] },
        "Venda Finalizada": { id: 5, clientes: [] },
        "Negados": { id: 6, clientes: [] },
        "Arquivados": { id: 7, clientes: [] },
        "Excluidos": { id: 8, clientes: [] }
    };
    const [dadosPorColuna, setDadosPorColuna] = useState({});
    const [modalAberta, setModalAberta] = useState(false);
    const [modalClientes, setModalClientes] = useState(false);
    const [selectedCardData, setSelectedCardData] = useState(null);
    const [coluna, setColuna] = useState(null);
    const [modalOportunidade, setModalOportunidade] = useState(false);

    const handleCloseModalCadastro = () => {
        setModalOportunidade(false);
    }


    const handleCloseFormulario = () => {
        navigate("/");
        localStorage.setItem("page-cobranca", "/");
    };

    const toggleModal = () => {
        setModalAberta(!modalAberta);
    };

    const toggleModalClientes = () => {
        setModalClientes(!modalClientes);
    };

    const handleCardClick = (cardData, titulo) => {
        setSelectedCardData(cardData);
        setColuna(titulo);
        setModalAberta(false);
        setModalClientes(true);
    };

    const handleCloseFormularioModal = () => {
        setModalClientes(false);
    };
    const handleCadastroOportunidade = () => {
        setModalOportunidade(true);
    }

    const construirColunasDinamicamente = (dadosClientes) => {
        dadosClientes.forEach(cliente => {
            const colunaId = cliente.coluna_id;
            switch (colunaId) {
                case 1:
                    colunasDinamicas[
                        "Indicados"
                    ].clientes.push(cliente);
                    break;
                case 2:
                    colunasDinamicas[
                        "Tentativa de Contato"
                    ].clientes.push(cliente);
                    break;
                case 3:
                    colunasDinamicas[
                        "Oportunidade de Venda"
                    ].clientes.push(cliente);
                    break;
                case 4:
                    colunasDinamicas[
                        "Aguardando Contrato"
                    ].clientes.push(cliente);
                    break;
                case 5:
                    colunasDinamicas[
                        "Venda Finalizada"
                    ].clientes.push(cliente);
                    break;
                case 6:
                    colunasDinamicas[
                        "Negados"
                    ].clientes.push(cliente);
                    break;
                case 7:
                    colunasDinamicas[
                        "Arquivados"
                    ].clientes.push(cliente);
                    break;
                case 8:
                    colunasDinamicas[
                        "Excluidos"
                    ].clientes.push(cliente);
                    break;
            }
        });
        return colunasDinamicas;
    };

    useEffect(() => {
        getCRMVendas().then((data) => {
            const colunas = construirColunasDinamicamente(data);
            setDadosPorColuna(colunas);
        }).catch((error) => {
            toast.error('Erro ao obter dados do CRM Vendas:' + error);
        });
    }, []);

    return (
        <div className="container-cobranca-escritorio">
            <div className="retorna-cobranca">
                <div className="button-retorn-cobran">
                    <div className="button-retorn3">
                        <ButtonIcon
                            funcao={handleCloseFormulario}
                            icon={<ArrowBackIosNewIcon fontSize={"small"} />}
                        />
                    </div>
                </div>
                <div className="crm-vendas-container">
                    <label>
                        <BallotIcon fontSize={"small"} />
                        CRM Vendas
                    </label>
                    <div className="button">
                        <ButtonText
                            title={"Criar Oportunidade"}
                            funcao={() => handleCadastroOportunidade()} />
                    </div>
                </div>

                <div className="filtro-cobrancaca-escritorio">
                    <div className="button-retorn2">
                        <ButtonIcon
                            icon={<FilterAltIcon fontSize={"small"} />}
                            funcao={toggleModal}
                        />
                        {modalAberta && (
                            <ModalLateral
                                isOpen={modalAberta}
                                toggleModal={toggleModal}
                                conteudo={
                                    <div className="container-modal-lateral">
                                        <h1>Filtro</h1>
                                        <div className="campos-filtro">
                                            <div className="filtro-colun-cobran">
                                                <label>Colunas</label>
                                                <select>
                                                    <option>Indicados</option>
                                                    <option>Tentativa de Contato</option>
                                                    <option>Oportunidade de Venda</option>
                                                    <option>Concluídos com Sucesso</option>
                                                    <option>Negados</option>
                                                    <option>Pagamento de Mensalidades</option>
                                                </select>
                                            </div>
                                            <div className="filtro-data-cobran">
                                                <label>Data Criação</label>
                                                <input type="date"></input>
                                            </div>
                                        </div>
                                        <div className="campos-filtro">
                                            <div className="campos-01-cobranca">
                                                <label>Nome</label>
                                                <input placeholder="Informe o Nome"></input>
                                            </div>
                                            <div className="indicacoes-cliente-cobran">
                                                <label>Telefone</label>
                                                <input type="number"></input>
                                            </div>
                                        </div>
                                        <div className="campos-filtro">
                                            <label>Selecione:</label>
                                        </div>
                                        <div className="campos-filtro">
                                            <div>
                                                <Checkbox {...label} />
                                                <label>Colunas Ocultas</label>
                                            </div>
                                        </div>
                                        <div className="pesquisa-filtro-cobran">
                                            <ButtonText title="PESQUISAR" />
                                        </div>
                                    </div>
                                }
                            ></ModalLateral>
                        )}
                    </div>
                </div>
            </div>
            <div className="informacoes-crm-vendas">
                {Object.entries(dadosPorColuna)
                    .filter(([titulo, dados]) => titulo !== "Arquivados" && titulo !== "Excluidos")
                    .map(([titulo, dados], index) => (
                        <ColunasCobranca
                            key={index}
                            titulo={titulo}
                            dados={dados.clientes}
                            numeros={dados.clientes.length}
                            onCardClick={handleCardClick}
                        />
                    ))}

                {modalClientes && selectedCardData && (
                    <Lead
                        open={modalClientes}
                        onClose={handleCloseFormularioModal}
                        clienteData={selectedCardData}
                        coluna={coluna}
                    />
                )}

                {modalOportunidade && (
                    <ModalCadastro
                        open={modalOportunidade}
                        onClose={handleCloseModalCadastro}
                        colunasDestino={colunasDinamicas} />
                )}
            </div>
        </div>
    );
};

export default CRMVendas;