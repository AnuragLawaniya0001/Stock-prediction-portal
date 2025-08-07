import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main' 
import Footer from './components/Footer' // Capitalized

function App() {
  return (
    <>
      <Header />  {/* Custom component */}
      <Main />    {/* Custom component */}
      <Footer />
    </>
  )
}

export default App
