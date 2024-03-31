import React from 'react';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/navBar'
import Home from './pages/Home'
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import Order from './pages/Order';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
// import { UserContextProvider } from '.../Context/UserContext';
// import { UserContextProvider } from '../Context/UserContext';
// import { UserContextProvider } from './Context/userContext';



axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true

function App() {
  return (
    // <UserContextProvider>
    <div> 
      <NavBar/>
      <Toaster position='bottom-rigth' toastOption={{duration:2000}}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sigup' element={<SingUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/orders' element={<Order/>}></Route>
      </Routes>
      </div> 
      //  </UserContextProvider>
  );
}

export default App;
