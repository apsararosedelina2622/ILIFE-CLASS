import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from "axios"

export const MyContext = createContext()
const ContextFile = ({ children }) => {

    var url = "http://localhost:5000/api"

    var [ type , setType ] = useState("")
    var [ desc , setDesc ] = useState("")
    var [ price , setPrice ] = useState("")
    var [ img , setImg ] = useState("")
    var [ previewImg , setPreviewImg ] = useState("")

    var [ productData , setProductData ] = useState([])

    const ImageFun = (e) => {
        const file = e.target.files[0]
        setImg(file)

        const reader = new FileReader()
        reader.onloadend = () => {
            setPreviewImg(reader.result)
        }
        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const FormSubmit = async (e) => {
        try{

            e.preventDefault()

            const formData = {
                img , 
                type , 
                desc , 
                price
            }

            const result = await axios.post(`${url}/add` , formData)
            alert("Data Added!")
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    const FetchData = async () => {
        try{
            const productList = await axios.get(`${url}/products`) 
            setProductData(productList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    useEffect(() => {
        FetchData()
    }, [])

    const RemoveProduct = async (id) => {
        try{
            await axios.delete(`${url}/remove/${id}`)
            alert("Product Removed!")
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    var contextValue = {
        setType , setDesc , setPrice , 
        img , ImageFun , previewImg ,  
        FormSubmit , 
        productData , 
        RemoveProduct
    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextFile