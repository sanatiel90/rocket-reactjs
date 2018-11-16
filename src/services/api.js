import axios from 'axios'

//modulo q faz requisicao usando axios
const api = axios.create({
    baseURL: 'https://rocketseat-node.herokuapp.com/api'
})

export default api;