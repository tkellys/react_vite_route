import { useState } from 'react'

import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Cadastro } from './pages/Cadastro'
import { Sobre } from './pages/Sobre'
import { Contato } from './pages/Contato'
import { Home } from './pages/Home'

function App() {
 
  return (
    <>
     <BrowserRouter>
    <nav>
     <ul>
      <li>
        <Link to='/cadastro'> Cadastro </Link>
        </li>
      <li>
      <Link to='/sobre'> Sobre </Link>
        </li>
      <li>
      <Link to='/contato'> Contato </Link>
        
      </li>
    </ul> 
    </nav>
 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cadastro' element={<Cadastro/>}/>
    <Route path='/sobre' element={<Sobre/>}/>
    <Route path='/contato' element={<Contato/>}/>

  </Routes>
  </BrowserRouter>
  

    {/**/}
    </>
  )
}

export default App
