import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

/*

  hospedagem front-end -> Netlify
    configura o endereço do back-end (endereço do servidor)

  hospedagem back-end -> EC2 (AWS)
    configura um servidor -> instância SO -> linux Ubuntu 20.04
      gera um link -> endereço
    
    acesso via ssh (endereço)
      clona o repositorio back-end
        configura o banco de dados
          instalação dos programas (SQLite, MySQL, Postgres, MongoDB)
          Docker

*/