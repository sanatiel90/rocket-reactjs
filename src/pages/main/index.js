///arquivo q renderiza o a pag main do app
import React, { Component } from 'react'

import './styles.css'
import api from '../../services/api'

//componente q renderiza os produtos vindos da api
class Main extends Component {
    //var q guarda estado
    state = {
        products: [],
        productInfo: {},
        page: 1
    }

    //funcao do React q é executada assim q o componente é mostrado; nesse caso vai carregar os produtos da api
    componentDidMount(){
        this.loadProducts()
    }
    
    //funcao q carrega os produtos atraves da requisicao à api
    loadProducts = async (pageNumber = 1) => {
        const response = await api.get(`/products?page=${pageNumber}`)
        //dividindo o retorno da api com desestruturacao, passando o q tiver no response.docs para a var docs  
        //e passando o restante (usando ...rest operator) para a var productInfo
        const { docs, ...productInfo } = response.data
        //atualizando o state com os dados vindo da api e o numero da pagina atual
        this.setState({
            products: docs,
            productInfo,
            page: pageNumber
        })
    }  

    prevPage = () => {
        //buscando a pag atual e productInfo do estado
        const { page, productInfo } = this.state
        //se estiver na primeira pag dar exit
        if (page === 1) return;
        //se nao estiver na ultima pagina aumentar a pag em 1 e carrega os produtos da pag em questao
        const pageNumber = page - 1
        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        //buscando a pag atual e productInfo do estado
        const { page, productInfo } = this.state
        //se já estiver na ultima pag dar exit
        if (page === productInfo.pages) return;
        //se nao estiver na ultima pagina aumentar a pag em 1 e carrega os produtos da pag em questao
        const pageNumber = page + 1
        this.loadProducts(pageNumber)
    }

    render(){
        //desestruturalizacao: passando o products presente no state para uma var products, para nao ter q ficar usando this.state o temop todo
        //map precisa retornar algo e ter uma prod key="" com valor único no primeiro elemnento q aparecer
        const { products, page, productInfo } = this.state
        return (
            <div className="product-list"> 
                { products.map(prod => (
                       <article key={ prod._id }>  
                            <strong>{ prod.title }</strong>
                            <p>{ prod.description }</p>
                            <a href="#">Acessar</a>
                        </article>
                ))}
                <div className="actions">
                    <button disabled={ page === 1 } onClick={ this.prevPage }>Anterior</button>
                    <button disabled={ page === productInfo.pages } onClick={ this.nextPage } >Próximo</button>
                </div>
                <p>Total de produtos: { products.length }</p>
            </div>
        )
    }

}

export default Main