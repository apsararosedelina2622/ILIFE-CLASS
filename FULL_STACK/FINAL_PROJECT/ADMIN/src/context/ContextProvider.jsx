import React, { createContext, useState } from 'react'

export const MyContext = createContext()
const ContextProvider = ({ children }) => {

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
            reader.onload = () => {
                setImg(reader.file)
                setPreviewImg(reader.file)
            }
        }
        reader.readAsDataURL(file)
    }

    const contextValue = {
        type , setType , 
        category , setCategory , 
        desc , setDesc , 
        price , setPrice , 
        img , ImageFun , previewImg
    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextProvider