import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from "axios"
import { useEffect } from 'react'

export const MyContext = createContext()
const ContextFile = ({ children }) => {

    const url = `http://localhost:5000/api`

    const [ category , setCategory ] = useState("")
    const [ type , setType ] = useState("")
    const [ desc , setDesc ] = useState("")
    const [ price , setPrice ] = useState("")
    const [ img , setImg ] = useState("")
    const [ previewImg , setPreviewImg ] = useState("")

    const [ productData , setProductData ] = useState([])

    const ImageFun = (e) => {
        const file = e.target.files[0]
        
        if(file){
            const reader = new FileReader()

            reader.onloadend = () => {
                setImg(reader.result)
                setPreviewImg(reader.result)
            }

            reader.readAsDataURL(file)
        }

    }

    const SubmitFun = async (e) => {
        e.preventDefault()

        try{
            const formData = {
                category , 
                type , 
                desc , 
                price , 
                img
            }

            await axios.post(`${url}/add` , formData)
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
    } , [])

    console.log(productData)
 
    const contextValue = {
        category , setCategory , 
        type , setType , 
        desc , setDesc , 
        price ,  setPrice , 
        img , 
        previewImg , 
        ImageFun , 
        SubmitFun , 
        productData
    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextFile