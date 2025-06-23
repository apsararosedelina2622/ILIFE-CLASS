import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MyContext = createContext()
const ContextFile = ({ children }) => {

    var navigate = useNavigate()

    var [ username , setUsername ] = useState("")
    var [ password , setPassword ] = useState("")

    const Submit_Fun = (e) => {
        e.preventDefault()

        if(username === "user" && password === "User@123"){
            navigate("/submit")
        }
        else{
            alert("Invalid Inputs!")
        }

    }

    localStorage.setItem("abc" , username)
    
    var ContextValue = {
        username , setUsername , 
        password , setPassword , 
        Submit_Fun , 
        navigate
    }

  return (
    <MyContext.Provider value={ContextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextFile