import { useState } from 'react'
import Navigation from './components/Navigation'
import Body from './components/Body'
import Footer from './components/Footer'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Router } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


function App() {

  return (
     <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
     </BrowserRouter>
     </>
 
  )
}

export default App
