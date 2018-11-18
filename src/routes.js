//arq de config de rotas, usa a lib react-router-dom
import React from 'react'

//import componentes da lib react-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//BrowserRouter: indica q as rotas serão acessadas via browser
//Switch: indica q somente 1 rota poderá ser acessada por vez
//Route: cria uma rota, informando um path (caminho onde será acessado) e o componente q será renderizado

//importando componentes de paginas
import Main from './pages/main'
import Product from './pages/product'

//definindo rotas e componentes q serao usados; o atributo exact indica q a rota só vai ser acessada se a url estiver
//exatamente igual o path informado
const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main } ></Route>
            <Route path="/products/:id" component={ Product } ></Route>
        </Switch>
    </BrowserRouter>
)

export default routes