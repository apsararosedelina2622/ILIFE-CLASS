import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from "react-router-dom"

export const MyContext = createContext()
const Context = ({children}) => {

    var [ username , setUsername ] = useState("")
    var [ password , setPassword ] = useState("")

    var navigate = useNavigate()

    var SubmitFun = (e) => {
        e.preventDefault()

        if(username === "user" && password === "123"){
            navigate("/submit")
        }else{
            alert("Invalid Input!")
        }

    }

    localStorage.setItem("user" , username)

    var ContextValue = {
        username , setUsername , 
        password , setPassword , 
        SubmitFun , 
        navigate
    }

  return (
    <MyContext.Provider value={ContextValue}>
        {children}
    </MyContext.Provider>
  )
}

export default Context