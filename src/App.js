import React from 'react';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './pages/Home'
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import axios from 'axios'

axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sigup' element={<SingUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
