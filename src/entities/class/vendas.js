import { converterData } from '../../utils/fuctions';

export const Vendas = (data) => ({
    id: data?.id,
    titular: data?.titular,
    nome_vendedor: data?.vendedor,
    unidade: data?.unidade,
    data_contrato: converterData(data?.data),
    tipo_contrato: data?.tipo,
    status: data?.status,

});

export const VendaFinalizada = (data) => ({
    id: data?.id,
    titular: data?.titular,
    nome_vendedor: data?.vendedor,
    unidade: data?.unidade,
    data_contrato: converterData(data?.data),
    tipo_contrato: data?.tipo,
    status: data?.status,
});