import React, { createContext, useState } from 'react'
import { all_products } from '../assets/asset'
import { useNavigate } from 'react-router-dom'

export const MyContext = createContext()

const MyContextProvider = ({children}) => {

  const navigate = useNavigate()

  const [ input , setInput ] = useState("")

  const [ filteredData , setFilteredData ] = useState([])

  const SearchFun = () => {
    setFilteredData(all_products.filter(a => a.type.toLowerCase().includes(input.toLowerCase())))
  }

  const ContextValue = {
    navigate , 
    setInput , 
    SearchFun , 
    filteredData
  }

  return (
    <MyContext.Provider value={ContextValue}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider