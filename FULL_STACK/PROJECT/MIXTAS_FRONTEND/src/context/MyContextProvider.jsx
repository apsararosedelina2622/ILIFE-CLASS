import React, { createContext, useEffect, useState } from 'react'
import { all_products } from '../assets/asset'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const MyContext = createContext()

const MyContextProvider = ({children}) => {

  var url = "http://localhost:5000"

  const navigate = useNavigate()

  var [ input , setInput ] = useState("")
  var [ filteredData , setFilteredData ] = useState([])

  var [ productData , setProductData ] = useState([])

  var [ username , setUsername ] = useState("")
  var [ password , setPassword ] = useState("")
  var [ email , setEmail ] = useState("")

  var [ loginUsername , setLoginUsername ] = useState("")
  var [ loginPassword , setLoginPassword ] = useState("")

  const SearchFun = () => {
    setFilteredData(all_products.filter(a => a.type.toLowerCase().includes(input.toLowerCase())))
  }

  const FetchData = async () => {
    try{
      const productList = await axios.get(`${url}/product/products`)
      setProductData(productList.data)
    }
    catch(err){
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
  }

  useEffect(() => {
    FetchData()
  } , [])

  console.log(email)
  
  const RegisterSubmitFun = async (e) => {
    try{
      
      e.preventDefault()

      const userData = {
        username , 
        password , 
        email
      }

      await axios.post(`${url}/user/adduser` , userData)
      alert("Registered Successfully!")
      setUsername("")
      setPassword("")
      setEmail("")
    }
    catch(err){
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
  }

  const LoginSubmitFun = async (e) => {
    try{

      e.preventDefault()

    }
    catch(err){
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
  }

  const ContextValue = {
    navigate , 
    setInput , 
    SearchFun , 
    filteredData , 
    productData , 
    username , setUsername , 
    password , setPassword , 
    email , setEmail , 
    RegisterSubmitFun , 
    loginUsername , setLoginUsername , 
    loginPassword , setLoginPassword , 
    LoginSubmitFun
  }

  return (
    <MyContext.Provider value={ContextValue}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider