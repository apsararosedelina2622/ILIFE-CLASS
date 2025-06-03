// use Reducer

// import React, { useReducer } from 'react'

// const New = () => {

//   const ACTION = {
//     Inc : "Increment",
//     Dec : "Decrement",
//     Mul : "Multiplication"
//   }

//   const reduceFun = (state , action) => {
//     switch(action.type){
//       case ACTION.Inc :
//         return {count : state.count + 2}
//       case ACTION.Dec :
//         return {count : state.count - 1}
//       case ACTION.Mul :
//         return {count : state.count * 2}
//       default : 
//         return state
//     }
//   }

//   const [state , dispatch] = useReducer(reduceFun , {count : 1})

//   const addFun = () => {
//     dispatch({ type : ACTION.Inc})
//   }

//   const subFun = () => {
//     dispatch({ type : ACTION.Dec})
//   }

//   const mulFun = () => {
//     dispatch({ type : ACTION.Mul})
//   }

//   console.log(state)

//   return (
//     <>
//         <button onClick={addFun}>Add</button>        
//         <button onClick={subFun}>Sub</button>        
//         <button onClick={mulFun}>Mul</button>  
//         <h1>{state.count}</h1>      
//     </>
//   )
// }

// export default New



// Use Ref

// import React, { useRef } from "react";

// const New = () => {

//   const reference = useRef("");

//   const refFun = () => {
//     reference.current.style.color = "red"
//   }

//   return (
//     <>
//       <button onClick={refFun}>
//         Change Color
//       </button>

//       <div ref={reference}>Box</div>
//     </>
//   );
// };

// export default New;



// import React, { useRef } from "react";

// const New = () => {
//   const reference = useRef();

//   const handleHide = () => {
//     reference.current.style.display = "none";
//   };

//   return (
//     <>
//       <p ref={reference}>I am a paragraph!</p>
//       <button onClick={handleHide}>Hide Paragraph</button>
//     </>
//   );
// };

// export default New;



// import React, { useRef } from 'react'

// const Day9_Ref = () => {

//   const reference = useRef()

//   const refFun = () => {
//     reference.current.style.width = '350px'
//   }

//   return (
//     <>
//       <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" ref={reference} width='250'/>
//       <br />
//       <button onClick={refFun}>Click</button>
//     </>
//   )
// }

// export default Day9_Ref




import React, { useEffect, useRef } from 'react'

const Day9_Ref = () => {

  const reference = useRef()

  useEffect(() => {
    reference.current.focus()
  }, [])

  return (
    <>
      <input type="text" ref={reference} />
      <input type="text" />
    </>
  )
}

export default Day9_Ref