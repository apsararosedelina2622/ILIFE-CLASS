import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from "axios"

export const MyContext = createContext()
const ContextFile = ({ children }) => {

    var url = "http://localhost:5000/api"

    var [ category , setCategory ] = useState("")
    var [ type , setType ] = useState("")
    var [ desc , setDesc ] = useState("")
    var [ price , setPrice ] = useState("")
    var [ img , setImg ] = useState("")
    var [ previewImg , setPreviewImg ] = useState("")

    var [ productData , setProductData ] = useState([])

    var [ updateCategory , setUpdateCategory ] = useState("")
    var [ updateType , setUpdateType ] = useState("")
    var [ updateDesc , setUpdateDesc ] = useState("")
    var [ updatePrice , setUpdatePrice ] = useState("")
    var [ updateImg , setUpdateImg ] = useState("")
    var [ updatePreviewImg , setUpdatePreviewImg ] = useState("")
    var [ updateId , setUpdateId ] = useState("")

    const ImageFun = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result); 
                setPreviewImg(reader.result); 
            };
            reader.readAsDataURL(file);
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

            await axios.post(`${url}/add` , formData)
            alert("Product Added!")
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
            setUpdateImg(product.img)
            setUpdatePreviewImg(product.img)
            setUpdateId(product._id)
        }
    }

    const UpdateSubmitFun = async (e) => {
        try{

            e.preventDefault()

            var updateData = {
                category : updateCategory , 
                type : updateType , 
                desc : updateDesc , 
                price : updatePrice , 
                img : updateImg
            }

            await axios.put(`${url}/update/${updateId}` , updateData)
            alert("Product Updated!")
            FetchData()
        }
        catch(err){
            console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
        }
    }

    var contextValue = {
        category , setCategory , 
        type , setType , 
        desc , setDesc , 
        price , setPrice , 
        img , ImageFun , previewImg ,  
        FormSubmit , 
        productData , 
        RemoveProduct , 
        UpdateProduct , 
        updateCategory , setUpdateCategory , 
        updateType , setUpdateType , 
        updateDesc , setUpdateDesc , 
        updatePrice , setUpdatePrice , 
        updatePreviewImg , 
        UpdateImageFun , 
        UpdateSubmitFun
    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextFile