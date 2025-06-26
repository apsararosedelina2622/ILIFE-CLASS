import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MyContext = createContext()
const Context = ({ children }) => {

    var navigate = useNavigate()

    var [ username , setUsername ] = useState("")
    var [ password , setPassword ] = useState("")

    var SubmitFun = (e) => {
        e.preventDefault()

        if(username === "user" && password === "User@123"){
            navigate("/submit")
        }
        else{
            alert("Invalid Inputs!")
        }

    }

    localStorage.setItem("abc" , username)

    var contextValue = {
        username , setUsername , 
        password , setPassword , 
        SubmitFun , 
        navigate
    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default Context