import axios from 'axios'

//Importação do Banco de Dados
export const Api = axios.create({
    baseURL: "http://localhost:3000/"
});


