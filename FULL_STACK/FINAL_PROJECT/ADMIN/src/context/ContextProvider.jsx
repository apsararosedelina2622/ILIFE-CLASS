import React, { createContext, useState } from 'react'
import axios from "axios"

export const MyContext = createContext()
const ContextProvider = ({ children }) => {

    const url = "http://localhost:5000"

    var [ type , setType ] = useState("")
    var [ category , setCategory ] = useState("")
    var [ desc , setDesc ] = useState("")
    var [ price , setPrice ] = useState("")
    var [ img , setImg ] = useState("")
    var [ previewImg , setPreviewImg ] = useState("")

    const ImageFun = (e) => {
        var file = e.target.files[0]

        if(file){
            var reader = new FileReader()

            reader.onloadend = () => {
                setImg(reader.result)
                setPreviewImg(reader.result)
            }

            reader.readAsDataURL(file)
        }
    }

    const FormSubmit = async (e) => {
        try{
            e.preventDefault()

            const formData = {
                img , 
                category , 
                type , 
                desc , 
                price
            }

            await axios.post(`${url}/product/add` , formData)
            alert("Product added!")
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    const contextValue = {
        type , setType , 
        category , setCategory , 
        desc , setDesc , 
        price , setPrice , 
        ImageFun , previewImg , 

        FormSubmit
    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextProvider