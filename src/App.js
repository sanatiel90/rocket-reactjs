import React, { Component } from 'react';
//importando componente Header
import Header from './components/Header'
//importando componente Routes, q define as rotas e vai renderizar componentes de pagina como Main e DetalhaProduct
import Routes from './routes'
//importando estilizacao
import './styles.css'

//App tbm um stateless component q renderiza o comp Header
const App = () => (
  <div className="App">
      <Header/>
      <Routes/>
   </div>
)

export default App;

//quando uma arrow function usa parenteses no corpo nesse formato () => () , ao inves de () => {}, está apenas omitindo o return
//assim, os dois são equivalentes
/*
  const App = () => {
  return  
  <div className="App">
      <Header/>
   </div>
  }
 
  const App = () => (
  <div className="App">
      <Header/>
   </div>
)

 */  



