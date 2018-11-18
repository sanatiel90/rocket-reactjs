import React, { Component } from 'react'
import api from './../../services/api'
import './styles.css'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    state = {
        product: {}
    }
    
    async componentDidMount(){
        //recuperando id do prod passado na rota atraves do 'props'; nesse caso vai buscar o parametro enviado via props q 'matcha' com 'id'
        const { id } = this.props.match.params;
        const response = await api.get(`/products/${id}`)
        this.setState({
            product: response.data
        })
    }



    render(){
        const { product } = this.state
        return (
            <div className="product-info">
                <h1>{ product.title }</h1>
                <p>{ product.description }</p>
                <p>
                    URL: <a href={product.url}> { product.url } </a>
                </p>
                <Link to={'/'}>Voltar</Link>
            </div>
        )
    }
}