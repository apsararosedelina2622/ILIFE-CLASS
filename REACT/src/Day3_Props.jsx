// DIRECT (PROPS) 

    // import React from 'react'

    // const Day3_Props = (props) => {
    //     console.log(props)
    //   return (
    //     <>
    //         <h1>{props.name}... {props.message}!</h1>
    //     </>
    //   )
    // }

    // export default Day3_Props

// DIRECT PROPS USING DESTRUCTURING

    // import React from 'react'
    
    // const Day3_Props = ({ name , message }) => {
    //   return (
    //     <>
    //         <h1>{name}... {message}!</h1>
    //     </>
    //   )
    // }
    
    // export default Day3_Props

// VARIABLES (PROPS)

    // import React from 'react'

    // const Day3_Props = (props) => {
    //   return (
    //     <>
    //         <h1>Student Name : {props.stu_name}</h1>
    //         <h1>Student Age : {props.stu_age}</h1>
    //         <h1>Student Address : {props.stu_place}</h1>
    //     </>
    //   )
    // }

    // export default Day3_Props

// VARIABLES PROPS USING DESTRUCTURING

    // import React from 'react'

    // const Day3_Props = ({stu_name , stu_age , stu_place}) => {
    //   return (
    //     <>
    //         <h1>Student Name : {stu_name}</h1>
    //         <h1>Student Age : {stu_age}</h1>
    //         <h1>Student Address : {stu_place}</h1>
    //     </>
    //   )
    // }

    // export default Day3_Props

// ARRAY (PROPS)

    // import React from 'react'

    // const Day3_Props = (props) => {
    //   return (
    //     <>
    //         <dl>
    //             <dt>Course Name</dt>
    //             <dd>{props.array_value[0]}</dd>
    //             <dd>{props.array_value[1]}</dd>
    //             <dd>{props.array_value[2]}</dd>
    //             <dd>{props.array_value[3]}</dd>
    //             <dd>{props.array_value[4]}</dd>
    //         </dl>
    //     </>
    //   )
    // }

    // export default Day3_Props

// ARRAY PROPS USING DESTRUCTURING

    // import React from 'react'

    // const Day3_Props = ({array_value}) => {
    //   return (
    //     <>
    //         <dl>
    //             <dt>Course Name</dt>
    //             <dd>{array_value[0]}</dd>
    //             <dd>{array_value[1]}</dd>
    //             <dd>{array_value[2]}</dd>
    //             <dd>{array_value[3]}</dd>
    //             <dd>{array_value[4]}</dd>
    //         </dl>
    //     </>
    //   )
    // }

    // export default Day3_Props

// ARRAY MAP (PROPS)

    // import React from 'react'

    // const Day3_Props = (props) => {
    //   return (
    //     <>
    //         <dl>
    //             <dt>Course Name</dt>
    //             {props.array_value.map((value , index) => {
    //                 return(
    //                     <dd key={index}>{value}</dd>
    //                 )
    //             })}
    //         </dl>
    //     </>
    //   )
    // }

    // export default Day3_Props

// ARRAY MAP (PROPS) USING DESTRUCTURING
    
    // import React from 'react'

    // const Day3_Props = ({array_value}) => {
    //   return (
    //     <>
    //         <dl>
    //             <dt>Course Name</dt>
    //             {array_value.map((value , index) => {
    //                 return(
    //                     <dd key={index}>{value}</dd>
    //                 )
    //             })}
    //         </dl>
    //     </>
    //   )
    // }

    // export default Day3_Props

// OBJECT (PROPS)

    // import React from 'react'

    // const Day3_Props = (props) => {
    // return (
    //     <>
    //         <h1>Student Name : {props.object_value.name}</h1>
    //         <h1>Student Age : {props.object_value.age}</h1>
    //         <h1>Student Place : {props.object_value.place}</h1>
    //     </>
    // )
    // }

    // export default Day3_Props

// OBJECT PROPS USING DESTRUCTURING

    // import React from 'react'

    // const Day3_Props = ({object_value}) => {
    // return (
    //     <>
    //         <h1>Student Name : {object_value.name}</h1>
    //         <h1>Student Age : {object_value.age}</h1>
    //         <h1>Student Place : {object_value.place}</h1>
    //     </>
    // )
    // }

    // export default Day3_Props

// JSON (PROPS)

    // import React from 'react'

    // const Day3_Props = (props) => {
    //   return (
    //     <>
    //         <h1>Student 1</h1>
    //         <h4>Name : {props.json_value[0].name}</h4>
    //         <h4>Age : {props.json_value[0].age}</h4>
    //         <h4>Place : {props.json_value[0].place}</h4>

    //         <h1>Student 2</h1>
    //         <h4>Name : {props.json_value[1].name}</h4>
    //         <h4>Age : {props.json_value[1].age}</h4>
    //         <h4>Place : {props.json_value[1].place}</h4>

    //         <h1>Student 3</h1>
    //         <h4>Name : {props.json_value[2].name}</h4>
    //         <h4>Age : {props.json_value[2].age}</h4>
    //         <h4>Place : {props.json_value[2].place}</h4>
    //     </>
    //   )
    // }

    // export default Day3_Props

// JSON PROPS USING DESTRUCTURING

    //  import React from 'react'

    // const Day3_Props = ({json_value}) => {
    //   return (
    //     <>
    //         <h1>Student 1</h1>
    //         <h4>Name : {json_value[0].name}</h4>
    //         <h4>Age : {json_value[0].age}</h4>
    //         <h4>Place : {json_value[0].place}</h4>

    //         <h1>Student 2</h1>
    //         <h4>Name : {json_value[1].name}</h4>
    //         <h4>Age : {json_value[1].age}</h4>
    //         <h4>Place : {json_value[1].place}</h4>

    //         <h1>Student 3</h1>
    //         <h4>Name : {json_value[2].name}</h4>
    //         <h4>Age : {json_value[2].age}</h4>
    //         <h4>Place : {json_value[2].place}</h4>
    //     </>
    //   )
    // }

    // export default Day3_Props

// JSON MAP PROPS

    // import React from 'react'

    // const Day3_Props = (props) => {
    //   return (
    //     <>
    //       {props.json_value.map((value , index) => {
    //         return(
    //             <div key={index}>
    //                 <h4>Name : {value.name}</h4>
    //                 <h4>Age : {value.age}</h4>
    //                 <h4>Place : {value.place}</h4>
    //             </div>
    //         )
    //       })}  
    //     </>
    //   )
    // }

    // export default Day3_Props

// JSON MAP PROPS USING DESTRUCTURING

    import React from 'react'

    const Day3_Props = ({json_value}) => {
      return (
        <>
            <h1>Total Students : {json_value.length}</h1>
            {json_value.map((value , index) => {
                return(
                    <div key={index}>
                        <h4>Name : {value.name}</h4>
                        <h4>Age : {value.age}</h4>
                        <h4>Place : {value.place}</h4>
                    </div>
                )
            })}  
        </>
      )
    }

    export default Day3_Props