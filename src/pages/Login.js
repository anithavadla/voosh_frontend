import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [data, setData]= useState(
        {
            phoneNumber:'',
            password:''
        }
    )

    const loginUser = (e) =>
    {
        e.preventDefault()
        axios.get('/')
    }
  return (
    <div>
      <form onSubmit={loginUser}>
      <label>Phone Number</label>
        <input type='tel' placeholder='enter phonenumber'
         value={data.phoneNumber} onChange={(e)=>setData({...data,phoneNumber:e.target.value})}/ >

        <label>Password</label>
        <input type='password' placeholder='enter password'
         value={data.password} onChange={(e)=>setData({...setData,password:e.target.value})}/>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
