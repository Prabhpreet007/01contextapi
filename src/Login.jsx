import React, { useContext, useState } from 'react'
import NewContext from "./NewContext"

const Login = () => {
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")

    const {setName}=useContext(NewContext) //imp

    const handlesubmit=(e)=>{
        e.preventDefault()
        setName({userName,password})
    }
  return (
    <div className='p-4 m-3'>
        <h1>Enter Details</h1>
        <input placeholder='username' type="username" value={userName} onChange={(e)=>{
            setUserName(e.target.value)
        }} />
      {" "}
        <input placeholder='password' type="password" value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
