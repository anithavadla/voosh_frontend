import React from 'react'
import { useState } from 'react'  
import axios from 'axios'  
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const SingUp = () => {

    const navigate=useNavigate()
    const [data,setData]=useState(
        {
            name:'',
            phoneNumber:'',
            password:''
        }
    )

    const singUpUser = async(e)=>
    {
        e.preventDefault()

        const {name, phoneNumber,password}=data
        try {
            const {data} = await axios.post('/user/add-user', {
                name,phoneNumber,password
            })

            if(data.error)
            {
                toast.error(data.error)
            }
            else{
                setData({})
                toast.success("Signed up successfully")
                navigate('/login')
            }

            
        } catch (error) {
            console.error(error)
        }

    }

  return (
    <div>
      <form onSubmit={singUpUser}>
        <label>Name</label>
        <input type='text' placeholder='enter name' 
            value={data.name} onChange={(e)=>setData({...data, name:e.target.value})}/>

        <label>Phone Number</label>
        <input type='tel' placeholder='enter phonenumber' 
             value={data.phoneNumber} onChange={(e)=>setData({...data, phoneNumber:e.target.value})}/ >

        <label>Password</label>
        <input type='password' placeholder='enter password'
             value={data.password} onChange={(e)=>setData({...data, password:e.target.value})}/>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SingUp
