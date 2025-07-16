import React, { createContext, useEffect, useState } from 'react'
import { all_products } from '../assets/asset'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const MyContext = createContext()

const MyContextProvider = ({children}) => {

  // Backend URL

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

  // Search Function

  const SearchFun = () => {
    setFilteredData(all_products.filter(a => a.type.toLowerCase().includes(input.toLowerCase())))
  }

  // Fetching Product Data From Database

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

  // Register Function

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

  // Login Function

  const LoginSubmitFun = async (e) => {
    try{

      e.preventDefault()

      localStorage.setItem("username" , loginUsername)

      const loginData = {
        username : loginUsername , 
        password : loginPassword
      }
      await axios.post(`${url}/user/login` , loginData)
      alert("Login Successfully!")
      navigate("/home")
    }
    catch(err){
      alert("Invalid username or password.");
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
  }

  const LogoutFun = () => {
    localStorage.removeItem("username")
    setLoginUsername("")
    navigate("/")
  }

  const ContextValue = {
    navigate , 

    // Search Function

    setInput , 
    SearchFun , 
    filteredData , 

    // Fetching Product Data From Database

    productData , 

    // Register Function

    username , setUsername , 
    password , setPassword , 
    email , setEmail , 
    RegisterSubmitFun , 
    
    // Login Function

    loginUsername , setLoginUsername , 
    loginPassword , setLoginPassword , 
    LoginSubmitFun , 

    // Logout Function

    LogoutFun
  }

  return (
    <MyContext.Provider value={ContextValue}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider