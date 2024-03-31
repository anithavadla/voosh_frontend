import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate=useNavigate()

    const [data, setData]= useState(
        {
            phoneNumber:'',
            password:''
        }
    )

    const loginUser =  async(e) =>
    {
        e.preventDefault()
        const {phoneNumber,password}=data
        try {
            const {data} = await axios.post('/user/login-user', {
                phoneNumber,password
            })

            if(data.error)
            {
                toast.error(data.error)
            }
            else{
                setData({})
                toast.success("logged in  successfully")
                navigate('/orders')
            }

            
        } catch (error) {
            console.error(error)
        }
        
    }
  return (
    <div>
      <form onSubmit={loginUser}>
      <label>Phone Number</label>
        <input type='tel' placeholder='enter phonenumber'
         value={data.phoneNumber} onChange={(e)=>setData({...data,phoneNumber:e.target.value})}/ >

        <label>Password</label>
        <input type='password' placeholder='enter password'
         value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
