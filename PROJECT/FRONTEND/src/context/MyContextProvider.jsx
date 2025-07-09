import React, { createContext, useEffect, useState } from 'react'
import { all_products } from '../assets/asset'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const MyContext = createContext()

const MyContextProvider = ({children}) => {

  const url = "http://localhost:5000/api"

  const navigate = useNavigate()

  const [ input , setInput ] = useState("")

  const [ filteredData , setFilteredData ] = useState([])

  const [ productData , setProductData ] = useState([])

  const SearchFun = () => {
    setFilteredData(all_products.filter(a => a.type.toLowerCase().includes(input.toLowerCase())))
  }

  const FetchData = async () => {
    try{
      const products = await axios.get(`${url}/products`)
      console.log(products.data)
      setProductData(products.data)
    }
    catch(err){
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
  }

  useEffect(() => {
    FetchData()
  } , [])

  const ContextValue = {
    navigate , 
    setInput , 
    SearchFun , 
    filteredData , 
    productData
  }

  return (
    <MyContext.Provider value={ContextValue}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider