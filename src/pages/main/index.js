///arquivo q renderiza o a pag main do app
import React, { Component } from 'react'

import './styles.css'
import api from '../../services/api'

//componente q renderiza os produtos vindos da api
class Main extends Component {
    //var q guarda estado
    state = {
        products: []
    }

    //funcao do React q é executada assim q o componente é mostrado; nesse caso vai carregar os produtos da api
    componentDidMount(){
        this.loadProducts()
    }
    
    loadProducts = async () => {
        const response = await api.get('/products')
        //atribuindo o retorno da api à state products
        this.setState({
            products: response.data.docs
        })
    }  

    render(){
        //desestruturalizacao: passando o products presente no state para uma var products, para nao ter q ficar usando this.state o temop todo
        const { products } = this.state
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
                    <button>Anterior</button>
                    <button>Próximo</button>
                </div>
                <p>Total de produtos: { products.length }</p>
            </div>
        )
    }

}

export default Main