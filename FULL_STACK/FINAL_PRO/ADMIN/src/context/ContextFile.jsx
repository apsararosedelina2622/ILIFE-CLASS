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

    const [ updateCategory , setUpdateCategory ] = useState("")
    const [ updateType , setUpdateType ] = useState("")
    const [ updateDesc , setUpdateDesc ] = useState("")
    const [ updatePrice , setUpdatePrice ] = useState("")
    const [ updateImg , setUpdateImg ] = useState("")
    const [ updatePreviewImg , setUpdatePreviewImg ] = useState("")
    const [ updateId , setUpdateId ] = useState("")

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

    const RemoveProduct = async (id) => {
        try{
            await axios.delete(`${url}/remove/${id}`)
            alert("Data Removed!")
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    const UpdateImageFun = (e) => {
        var file = e.target.files[0]
        if(file){
            var reader = new FileReader()

            reader.onloadend = () => {
                setUpdateImg(reader.result)
                setUpdatePreviewImg(reader.result)
            }

            reader.readAsDataURL(file)
        }
    }

    const UpdateProduct = (id) => {
        var product = productData.find(a => a._id === id)
        if(product){
            setUpdateCategory(product.category)
            setUpdateType(product.type)
            setUpdateDesc(product.desc)
            setUpdatePrice(product.price)
            setUpdatePreviewImg(product.img)
            setUpdateId(product._id)
        }
    }

    const UpdateSubmitFun = async (e) => {
        try{
            
            e.preventDefault()

            var updatedData = {
                category : updateCategory , 
                type : updateType , 
                desc : updateDesc , 
                price : updatePrice , 
                img : updateImg
            }

            await axios.put(`${url}/update/${updateId}` , updatedData)
            alert("Product updated!")
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }
 
    const contextValue = {
        category , setCategory , 
        type , setType , 
        desc , setDesc , 
        price ,  setPrice , 
        img , 
        previewImg , 
        ImageFun , 
        SubmitFun , 
        productData , 
        RemoveProduct , 
        UpdateProduct , 
        updateCategory , setUpdateCategory , 
        updateType , setUpdateType , 
        updateDesc , setUpdateDesc , 
        updatePrice , setUpdatePrice , 
        updatePreviewImg , UpdateImageFun ,
        UpdateSubmitFun
    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextFile