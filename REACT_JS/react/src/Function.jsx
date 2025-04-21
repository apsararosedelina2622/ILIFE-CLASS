import React from 'react'

const Function = ({val}) => {
  return (
    <div>
        {val.map((value,index)=>{
            return <p key={index}>{value}</p> 
        })}
    </div>
  )
}

export default Function