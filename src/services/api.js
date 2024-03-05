
import { VendaFinalizada } from '../entities/class/vendaFinalizada';
import { Vendas } from '../entities/class/vendas';
import httpsInstance from './url';

export const useWebVendedor = () => {
    const https = httpsInstance()

    const getContratos = async () => {
        try {
            const response = await https.get("/4dc8a898-efe3-438f-97a9-d700912a25fd");
            const { data } = response;

            if (data && data.contratos) {
                return data.contratos.map((item) => Vendas(item));
            } else {
                console.error("Dados inválidos ou ausentes na resposta da API.");
                return null;
            }
        } catch (error) {
            console.error("Erro ao obter contratos da API:", error);
            throw error; // ou trate o erro de acordo com suas necessidades
        }
    };

    const getContrato = async () => {
          try {
            const response = await https.get("/87f04950-b539-4745-9b1d-119b972bf4c9")
            const { data } = response;

            if(data){
                return VendaFinalizada(data)
            }

            return {}
        } catch (error) {
            console.error("Erro ao obter contratos da API:", error);
            throw error; // ou trate o erro de acordo com suas necessidades
        }     
    }

    return {
        getContratos,
        getContrato
    }
}