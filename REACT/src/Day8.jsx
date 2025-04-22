import React, { useEffect, useState } from 'react'

const Day8 = () => {

    const [data , setData] =useState([])

    const fetchData = async () => {
        const url = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await url.json()
        console.log(data)
        setData(data)
    }

    useEffect(() => {
        fetchData()
    } , [])

  return (
    <>
        <div className="container">
            <div className="row">
                {data.map((value , index) => {
                    return(
                        <div className='col-3 my-3' key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5>{value.name}</h5>
                                    <p>User Name : {value.username}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Day8


// import React, { useEffect, useState } from 'react'

// const Day8 = () => {

//     const [input , setInput] = useState("")
//     const [weather , setWeather] = useState("")

//     const fetchWeather = async () => {
//         const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fb59c0942a2632ab8fd509a7d7223de6&units=metric`)
//         const data = await url.json()
//         setWeather(data)
//     }

//     useEffect(() => {
//         fetchWeather()
//     } , [input])

//   return (
//     <>
//         <input type="text" onChange={(e) => setInput(e.target.value)} />

//         {weather && weather.main &&
//             <>
//                 <h3>{weather.name} - {weather.main.temp}</h3>
//             </>
//         }
//     </>
//   )
// }

// export default Day8