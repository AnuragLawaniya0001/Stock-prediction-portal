import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main' 
import Footer from './components/Footer' 
import Register from './components/Register'// Capitalized
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Login from './components/Login'
import Authprovider from './Authprovider'


function App() {
  return (
    <>
    <Authprovider >
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </Authprovider>
          
      
    </>
  )
}

export default App
