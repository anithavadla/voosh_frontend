import React from 'react'
import { useState } from 'react'    

const SingUp = () => {

    const [data,setData]=useState(
        {
            name:'',
            phoneNumber:'',
            password:''
        }
    )

    const singUpUser =(e)=>
    {
        e.preventDefault()

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
