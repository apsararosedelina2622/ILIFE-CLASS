import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from "axios"

export const MyContext = createContext()
const ContextFile = ({ children }) => {

    var url = "http://localhost:5000/api/"

    var [ type , setType ] = useState("")
    var [ desc , setDesc ] = useState("")
    var [ price , setPrice ] = useState("")
    var [ img , setImg ] = useState("")

    var [ productData , setProductData ] = useState([])

    const FormSubmit = async (e) => {
        try{

            e.preventDefault()

            const formData = new FormData()
                formData.append("type" , type)
                formData.append("desc" , desc)
                formData.append("price" , price)
                formData.append("image" , img)

            const result = await axios.post(url + "add" + formData)
            alert("Data Added!")
            console.log(result)
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    const FetchData = async () => {
        try{
            const productList = await axios.get(url + "products") 
            setProductData(productList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    console.log(productData)

    useEffect(() => {
        FetchData()
    }, [])

    var contextValue = {
        setType , setDesc , setPrice , setImg , 
        FormSubmit , 
        productData
    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextFile