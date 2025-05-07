import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Mycontext = createContext()

const Context = ({children}) => {

    const [username , setUsername] =useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate();

    const submitFun = (e) => {
        e.preventDefault()

        if(username === "user" && password === "user@123"){
            navigate("/submit")
        }else{
            alert("Invalid Username Password!")
        }
    }

    localStorage.setItem("username" , username)

    const contextValue = {
        username , setUsername , 
        password , setPassword , 
        submitFun , 
        navigate
    }

  return (
    <Mycontext.Provider value={contextValue}>
        {children}
    </Mycontext.Provider>
  )
}

export default Context