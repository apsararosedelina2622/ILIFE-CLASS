// import React, { useReducer } from "react";

// const UseReducer = () => {
//     function redFn(state,action){
//         if(action.type ==='inc'){
//             return {count : state.count + 1}
//         }
//         if(action.type ==='dec'){
//             return {count : state.count - 1}
//         }
//     }

//     const [state,dispatch] = useReducer(redFn, {count:0})
//     return(
//         <>
//             <button onClick={()=>{dispatch({type : 'dec'})}}>-</button>
//             <span>{state.count}</span>
//             <button onClick={()=>{dispatch({type : 'inc'})}}>+</button>
//         </>
//     )
// }

// export default UseReducer



import React, { useReducer } from 'react';

const UseReducer = () => {

    const ACTION = {
        DECREMENT : 'Dec',
        INCREMENT : 'Inc',
        MULTI : 'Mul'
    }

    function reduceFun(state,action){
        // return { data : state.data - 2}
        switch(action.type){
            case ACTION.DECREMENT:
                return {data : state.data - 2}
            case ACTION.INCREMENT:
                return {data : state.data + 2}
            case ACTION.MULTI:
                return {data : state.data * 2}
            default:
                return 'Hello'
        }
    }

    const [state, dispatch] = useReducer(reduceFun, {data : 10}) 

    const Dec = () => {
      dispatch({ type : ACTION.DECREMENT })
    };

    const Inc = () => {
        dispatch({ type : ACTION.INCREMENT })
    };

    const Mul = () => {
        dispatch({ type : ACTION.MULTI })
    };

    console.log(state);

    return (
        <div>
            <p>{state.data}</p>
            <button onClick={Inc}>+</button>
            <button onClick={Dec}>-</button>
            <button onClick={Mul}>*</button>
        </div>
    );
};

export default UseReducer;
