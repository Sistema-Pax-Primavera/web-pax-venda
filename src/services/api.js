
import { Contrato } from '../entities/class/contrato';
import { Vendas } from '../entities/class/vendas';
import httpsInstance from './url';

export const useWebVendedor = () => {
    const https = httpsInstance()

    const getContratos = async () => {
        const response = await https.get("/contratos");
        const { data } = response;
        return data.map((item) => Vendas(item));
    };

    const getContratoBusca = async (value) => {
        try {
            const response = await https.get(`/contratos/busca?value=${value}`);
            const { data } = response;

            if (data) {
                return data.map((item) => Vendas(item));
                //return VendaFinalizada(data)
            }
            return {}
        } catch (error) {
            console.log("Erro ao obter contratos da API:", error);
            return error;
        }
    }
    const getContrato = async (value) => {
        try {
            const response = await https.get(`/contrato?value=${value}`);
            const { data } = response;
            if (data) {
                return data.map((item) => Contrato(item));

            } else {
                console.log("Dados inválidos ou ausentes na resposta da API.");
                return null;
            }
        } catch (error) {
            console.error("Erro ao obter contratos da API:", error);
            return error;
        }

    }


    return {
        getContratos,
        getContratoBusca,
        getContrato
    }
}