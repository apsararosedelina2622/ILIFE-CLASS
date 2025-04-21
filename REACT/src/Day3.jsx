// DAY - 3

// STYLE, PROPS

// STYLE ( INLINE CSS, CSS USING OBJECT, EXTERNAL CSS )

// INLINE CSS 

    // import React from 'react'

    // const App = () => {
    //   return (
    //     <>
    //       <h1 style={{'color':'red', 'background-color' : 'black'}}>Hello</h1>
    //       <h1 style={{color:'red', backgroundColor : 'black'}}>Hello</h1>
    //     </>
    //   )
    // }

    // export default App

// CSS USING OBJECT

    // import React from 'react'

    // const App = () => {

    //   var obj1 = {
    //     color : 'red',
    //     backgroundColor : 'black'
    //   }

    //   var obj2 = {
    //     'color' : 'red',
    //     'background-color' : 'black'
    //   }

    //   return (
    //     <>
    //       <h1 style={obj1}>Hello</h1>
    //       <h1 style={obj2}>Hello</h1>
    //     </>
    //   )
    // }

    // export default App

// EXTERNAL CSS

    // import React from 'react'
    // import './index.css'

    // const Day3 = () => {
    //   return (
    //     <>
    //       <h1>Hello</h1>
    //     </>
    //   )
    // }

    // export default Day3

// PROPS

// DIRECT (PROPS)

    // import React from 'react'
    // import Day3_Props from './Day3_Props'

    // const Day3 = () => {
    //   return (
    //     <>
    //       <Day3_Props name="Abi" message="Welcome To React" />  
    //     </>
    //   )
    // }

    // export default Day3

// VARIABLES (PROPS)

    // import React from 'react'
    // import Day3_Props from './Day3_Props'

    // const Day3 = () => {

    //     var name = "Abi"
    //     var age = 21
    //     var place = "Trichy"

    //   return (
    //     <>
    //         <Day3_Props stu_name={name} stu_age={age} stu_place={place} />
    //     </>
    //   )
    // }

    // export default Day3

// ARARY (PROPS)

    // import React from 'react'
    // import Day3_Props from './Day3_Props'

    // const Day3 = () => {

    //     var arr = ["HTML" , "CSS" , "BOOTSTRAP" , "JAVA SCRIPT" , "REACT"]

    //   return (
    //     <>
    //         <Day3_Props array_value={arr} />
    //     </>
    //   )
    // }

    // export default Day3

// ARRAY MAP (PROPS)

    // import React from 'react'
    // import Day3_Props from './Day3_Props'

    // const Day3 = () => {

    //     var arr = ["HTML" , "CSS" , "BOOTSTRAP" , "JAVA SCRIPT" , "REACT"]

    //   return (
    //     <>
    //         <Day3_Props array_value={arr} />
    //     </>
    //   )
    // }

    // export default Day3

// OBJECT (PROPS)

    // import React from 'react'
    // import Day3_Props from './Day3_Props'

    // const Day3 = () => {

    //     var obj = {
    //         name : "Abi",
    //         age : 21, 
    //         place : "Trichy"
    //     }

    // return (
    //     <>
    //         <Day3_Props object_value={obj} />
    //     </>
    // )
    // }

    // export default Day3

// JSON (PROPS)

import React from 'react'
import Day3_Props from './Day3_Props'

const Day3 = () => {

    var data = [
        {
            name : "Abi",
            age : "21", 
            place : "Trichy"
        }, 
        {
            name : "Banu",
            age : "22", 
            place : "Chennai"
        }, 
        {
            name : "Begum",
            age : "20", 
            place : "Madurai"
        }
    ]

  return (
    <>
        <Day3_Props json_value={data} />
    </>
  )
}

export default Day3