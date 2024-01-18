import { useState } from 'react'
import Navigation from './components/Navigation'
import Body from './components/Body'
import Footer from './components/Footer'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Router } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/protected-route'


function App() {

  const [auth,setAuth] = useState(false);


  return (
     <>
     <HashRouter>
        <Routes>
          <Route path='/' element={<Body/>} />
          <Route path='/login' element={<Login auth={auth} setAuth={setAuth}/>} />
          <Route path='/dashboard' element={<ProtectedRoute auth={auth}>
              <Dashboard />
          </ProtectedRoute>} />
        </Routes>
     </HashRouter>
     </>
 
  )
}

export default App
