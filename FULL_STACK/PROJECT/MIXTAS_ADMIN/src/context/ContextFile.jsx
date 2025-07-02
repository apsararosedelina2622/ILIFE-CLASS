import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from "axios"

export const MyContext = createContext()
const ContextFile = ({ children }) => {

    var url = "http://localhost:5000/api/add"

    var [ type , setType ] = useState("")
    var [ desc , setDesc ] = useState("")
    var [ price , setPrice ] = useState("")
    var [ img , setImg ] = useState("")

    const FormSubmit = async (e) => {
        try{

            e.preventDefault()

            const formData = new FormData()
                formData.append("type" , type)
                formData.append("desc" , desc)
                formData.append("price" , price)
                formData.append("image" , img)

            const result = await axios.post(url , formData)
            alert("Data Added!")
            console.log(result)
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    var contextValue = {
        setType , setDesc , setPrice , setImg , 
        FormSubmit
    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextFile