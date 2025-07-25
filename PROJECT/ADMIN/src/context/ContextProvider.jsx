import React, { createContext, useState } from 'react'

export const MyContext = createContext()
const ContextProvider = ({ children }) => {

    const [ category , setCategory ] = useState("")
    const [ type , setType ] = useState("")
    const [ desc , setDesc ] = useState("")
    const [ price , setPrice ] = useState("")
    const [ img , setImg ] = useState("")
    const [ previewImg , setPreviewImg ] = useState("")

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

    const formData = {
        type , category , desc , price , img
    }

    console.log(formData)

    const contextValue = {
        category , setCategory , 
        type , setType , 
        desc , setDesc , 
        price , setPrice , 
        ImageFun , previewImg
    }
    
  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextProvider