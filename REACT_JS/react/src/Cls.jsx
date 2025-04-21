// import React from 'react'

// const Cls = (props) => {
//   return (
//     <div>
//       <p>{props.name}</p>
//       <p>{props.message}</p>
//     </div>
//   )
// }

// export default Cls



// import React from 'react'

// const Cls = ({name, message}) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{message}</p>
//     </div>
//   )
// }

// export default Cls



// import React from 'react';

// const Cls = (props) => {
//   return (
//     <div>
//       <h2>Items:</h2>
//       <ul>
//         {props.items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cls;

// import React from 'react';

// const Cls = ({users}) => {
//   return (
//     <div>
//       <h2>Users:</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.age} years old
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cls;


// import React from 'react'

// const Cls = async() => {
//   const url = await fetch('https://jsonplaceholder.typicode.com/users')

//   const data = await url.json();

//   data.map((props)=>{    
//     console.log(props.username);
//   })
// }

// export default Cls

// import React from 'react'

// const Cls = () => {
//   let a = 10;
//   return (
//     <div>
//       <p>{a > 50 ? 'True' : 'False'}</p>
//     </div>
//   )
// }

// export default Cls

// import React from 'react'

// const Cls = (props) => {
//   return (
//     <div>
//       <p>{props.data.name}</p>
//       <p>{props.data.age}</p>
//     </div>
//   )
// }

// export default Cls

// import React from 'react'

// const Cls = ({data}) => {
//   return (
//     <div>
//       <p>{data[0].name}</p>
//       {data.map((val,index)=>{
//         return(
//           <div key={index}>
//             <p>{val.name}</p>
//             <p>{val.age}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Cls


// import React from 'react'

// class Cls extends React.Component{
//   render(){
//     const a = 10;
//     return(
//       <>
//         <h1>{ (a >= 10) ? 'Yes' : 'No'}</h1>
//       </>
//     )
//   }
// }


// export default Cls





// import React from 'react'

// const Cls = (props) => {
//   return (
//     <div>
//         <p>{props.object.length}</p>
//         <p>{props.object[1].name} , {props.object[1].age}</p>
//         <p></p>
//        {props.object.map((val) => {
//         return(
//             <>
//                 <p>{val.name}</p>
//                 <p>{val.age}</p>
//             </>
//         )
//        })}
//     </div>
//   )
// }

// export default Cls



// import React, { useEffect, useState } from 'react'

// const Cls = () => {

//   const [data , setData] = useState(0);

//   const Inc = () => {
//     setData(data + 1)
//   }

//   const Dec = () => {
//     setData(data - 1)
//   }

//   useEffect(()=>{
//     console.log('Function Working' , data);
//   } , [data])

//   return (
//     <div>
//       <button onClick={Dec}>-</button>
//       <p>{data}</p>
//       <button onClick={Inc}>+</button>

//       <p>Hello!</p>
//     </div>
//   )
// }

// export default Cls




// import React, { useReducer } from 'react';

// const Cls = () => {

//     const ACTION = {
//         DECREMENT : 'Dec',
//         INCREMENT : 'Inc',
//         MULTI : 'Mul'
//     }

//     function reduceFun(state,action){
//         // return { data : state.data - 2}
//         switch(action.type){
//             case ACTION.DECREMENT:
//                 return {data : state.data - 2}
//             case ACTION.INCREMENT:
//                 return {data : state.data + 2}
//             case ACTION.MULTI:
//                 return {data : state.data * 2}
//             default:
//                 return 'Hello'
//         }
//     }

//     const [state, dispatch] = useReducer(reduceFun, {data : 10}) 

//     const Dec = () => {
//       dispatch({ type : ACTION.DECREMENT })
//     };

//     const Inc = () => {
//         dispatch({ type : ACTION.INCREMENT })
//     };

//     const Mul = () => {
//         dispatch({ type : ACTION.MULTI })
//     };

//     console.log(state);

//     return (
//         <div>
//             <p>{state.data}</p>
//             <button onClick={Inc}>+</button>
//             <button onClick={Dec}>-</button>
//             <button onClick={Mul}>*</button>
//         </div>
//     );
// };

// export default Cls;




// import React, { useEffect, useRef, useState } from 'react'

// const Cls = () => {
//     const [value, setValue] = useState('')

//     const reference = useRef()
//     const reference1 = useRef()

//     useEffect(()=>{
//         reference1.current.focus()
//     },[])

//     useEffect(()=>{
//         reference.current = value
//     },[value])

//     const Display = () =>{
//         console.log(reference.current.value);
//     }

//     // console.log("Hii");
    
//   return (
//     <div>
//         <input type="text" ref={reference1} />
//         <input 
//             ref={reference}
//             type="text"
//             value={value}
//             onChange={e => setValue(e.target.value)}
//         />
//         <button onClick={Display}>Click!</button>
//         <p>Prev : {reference.current}</p>
//         <p>Current : {value}</p>
//         {/* <p>{value}</p> */}
//     </div>
//   )
// }

// export default Cls






// import React, { useEffect, useRef, useState } from 'react'

// const Cls = () => {

//     const [value, setValue] = useState('')

//     const reference = useRef()
//     const reference1 = useRef()

//     const Display = () =>{
//         console.log(reference.current.value);
//     }

//     useEffect(()=>{
//         reference1.current.focus()
//     },[])

//     useEffect(()=>{
//         reference.current = value
//     },[value])

//     console.log("Hello");

//   return (
//     <div>
//         <input type="text" ref={reference1}/>
//         <input 
//             ref={reference}
//             type="text"
//             value={value}
//             onChange={(e) => {setValue(e.target.value)}}
//         />
//         <button onClick={Display}>Click!</button>
//         <p>Prev : {reference.current}</p>
//         <p>Current : {value}</p>
//         {/* <p>Input : {value}</p> */}
//     </div>
//   )
// }

// export default Cls




// import React from 'react'
// import './index.css'
// import StyleName from './App.module.css'

// const Cls = () => {
//     const style = {
//         color : 'pink',
//         background : 'blue'
//     }
//   return (
//     <div>
//         <h1 style={{color:"red",background:"green",textAlign:'center'}}>Welcome</h1>
//         <p style={style}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi reprehenderit ea necessitatibus dolores, quidem, accusamus nesciunt maxime autem, possimus in nam quisquam harum fugiat dolore quas rerum ipsa ratione vel.</p>
//         <h2>Hello</h2>
//         <h3 className={StyleName.tag}>Hello! Hiii...</h3>
//         <p className={StyleName.msg}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam quibusdam sit eius illum ut dolorem quod earum unde quam architecto, ipsum possimus fugiat illo quis et voluptate libero maxime?</p>
//     </div>
//   )
// }

// export default Cls




// import React from 'react'
// import { assets } from './assets/assets'

// const Cls = ({data}) => {
//   return (
//     <div>
//         <img src={assets.Img} alt="" />
//         <img src={assets.Img1} alt="" />
//         {data.map((a,b) => {
//             return(
//                 <div key={b}>
//                     <p>Name : {a.name} , Age : {a.age}</p>
//                 </div>
//             )
//         })}

//     </div>
//   )
// }

// export default Cls







// import React, { useEffect, useRef, useState } from 'react'

// const Cls = () => {

//   const [value , setValue] = useState('')

//   const reference = useRef()
//   const reference1 = useRef()

//   useEffect(()=>{
//     reference1.current.focus();
//   },[])

//   useEffect(()=>{
//     reference.current = value
//   }, [value])

//   // const Display = () =>{
//   //   console.log(reference.current.value);
//   // }
  
//   console.log('Hello!');
  
//   return (
//     <div>
//       <input type="text" ref={reference1} />
//       <input 
//         ref={reference}
//         type="text"
//         value={value}
//         onChange={(e)=> setValue(e.target.value)}
//       />
//       <p>Prev : {reference.current}</p>
//       <p>Current : {value}</p>
//       {/* <button onClick={Display}>Click</button> */}
//       {/* <p>{value}</p> */}
//     </div>
//   )
// }

// export default Cls



// import React, { useMemo, useState } from 'react'

// const Cls = () => {

//   const [num, setNum] = useState(0)
//   const [theme, setTheme] = useState(false)

//   // const value = Slow(num)

//   const value = useMemo(()=>{
//     return Slow(num)
//   },[num])

//   const themeStyle = {
//     color : theme ? 'white' : 'black',
//     background : theme ? 'black' : 'white'
//   }
  
//   return (
//     <div style={themeStyle}>
//       <h1>{value}</h1>
//       <input type="text" value={num} onChange={e => setNum(e.target.value)}/>
//       <button onClick={() => setTheme(!theme)}>Click</button>
//     </div>
//   )
// }

// export default Cls

// function Slow(num){
//   for(let i = 1; i >= 10000000000000; i++){}
//   return num*2;
// }



// import React, { useEffect, useMemo, useState } from 'react'

// const Cls = () => {

//   const [num, setNum] = useState(0)

//   const [theme, setTheme] = useState(false)

//   // const value = Slow(num)

//   const value = useMemo(()=>{
//     return Slow(num)
//   },[num])

//   // const [value, setValue] = useState()

//   // useEffect(()=>{
//   //   setValue(Slow(num))
//   // },[num])

//   const themeStyle = useMemo(()=>{
//     console.log("Theme Changing");
//     return {
//       color : theme ? 'white' : 'black',
//       background : theme ? 'black' : 'white'
//     }
//   },[theme])

//   // condition ? true : false

//   return (
//     <div style={themeStyle}>
//       <h1>{value}</h1>
//       <input type="text" value={num} onChange={e => setNum(e.target.value)} />
//       <button onClick={()=> setTheme(!theme)}>Change Theme</button>
//     </div>
//   )
// }

// export default Cls


// function Slow(num){
//   console.log('Slow Function Working');
//   for(let i = 1; i <= 10000000; i++){}
//   return num * 2;
// }




// import React, { useCallback, useMemo, useState } from 'react'
// import Practice from './Practice'

// const Cls = () => {

//   const [value, setValue] = useState(0)
//   const [theme, setTheme] = useState(false)

//   // const getItems = () => {
//   //   return [value + 1, value + 2, value + 3]
//   // }

//   const getItems = useCallback(() => {
//     return [value + 1, value + 2, value + 3]
//   },[value])

//   // const getItems = useMemo(() => {
//   //   return [value + 1, value + 2, value + 3]
//   // },[value])

//   const Style = {
//     color : theme ? 'white' : 'black',
//     background : theme ? 'black' : 'white'
//   }

//   return (
//     <div style={Style}>
//       <input type="text" value={value} onChange={e => setValue(Number(e.target.value))} />
//       <button onClick={()=> setTheme(!theme)}>Theme</button>
//       <Practice getItems={getItems} />
//     </div>
//   )
// }

// export default Cls






// import React, { useCallback, useMemo, useState } from 'react'
// import Practice from './Practice'

// const Cls = () => {

//   const [num, setNum] = useState(0)

//   const [theme, setTheme] = useState(false)

//   // const getItems = () => {
//   //   return [num + 1, num + 2, num + 3]
//   // }

//   const getItems = useCallback(() => {
//     return [num + 1, num + 2, num + 3]
//   },[num])

//   // const getItems = useMemo(() => {
//   //   return [num + 1, num + 2, num + 3]
//   // },[num])

//   const Style = {
//     color : theme ? 'white' : 'black',
//     background : theme ? 'black' : 'white'
//   }

//   return (
//     <div style={Style}>
//       <input type="text" value={num} onChange={e => setNum(Number(e.target.value))} />
//       <button onClick={() => setTheme(!theme)}>Change Theme</button>
//       <Practice getItems={getItems} />
//     </div>
//   )
// }

// export default Cls






// import React, { useEffect, useState } from 'react'

// const Cls = ({getItems}) => {

//   const [items, setItems] = useState([])

//   useEffect(()=>{
//     setItems(getItems());
//     // setItems(getItems);
//     console.log("Hello");
//   },[getItems])

//   return (
//     <div>
//       {items.map((a,b)=>(
//         <div key={b}>
//           <p>{a}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Cls





// import React, { useCallback, useMemo, useState } from 'react'
// import Practice from './Practice'

// const Cls = () => {

//   const [number, setNumber] = useState(0)

//   const [theme, setTheme] = useState(false)

//   const ThemeStyle = useMemo(()=>{
//     return {
//       color : theme ? 'white' : 'black',
//       background : theme ? 'black' : 'white'
//     }
//   },[theme])

//   // const getItems = () =>{
//   //   return [number + 1, number + 2, number + 3]
//   // }

//   const getItems = useCallback(() =>{
//     return [number + 1, number + 2, number + 3]
//   },[number])

//   // const getItems = useMemo(()=>{
//   //   return [number + 1, number + 2 , number + 3]
//   // },[number])

//   return (
//     <div style={ThemeStyle}>
//       <input type="text" value={number} onChange={e => setNumber(Number(e.target.value))} />
//       <button onClick={() => setTheme(!theme)}>Theme Change</button>
//       <Practice getItems={getItems} />
//     </div>
//   )
// }

// export default Cls



// import React, { useCallback, useState } from 'react'
// import Practice from './Practice'

// const Cls = () => {

//   const [num , setNum] = useState(0)

//   const [theme, setTheme] = useState(true)

//   const Style = {
//     color : theme ? 'black' : 'White',
//     background : theme ? 'white' : 'black'
//   }

//   // const getItems = () => {
//   //   return [num - 1, num, num + 1]
//   // }

//   const getItems = useCallback(() => {
//     return [num - 1, num, num + 1]
//   },[num])

//   return (
//     <div style={Style}>
//       <input type="text" value={num} onChange={e => setNum(Number(e.target.value))} />
//       <button onClick={() => setTheme(!theme)}>Theme</button>
//       <Practice getItems={getItems} />
//     </div>
//   )
// }

// export default Cls




// import React, { useState } from 'react'

// const Cls = () => {

//   const [isVisible, setIsVisible] = useState(true)

//   return (
//     <div>


//       <button onClick={()=> setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>

//       {isVisible && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam non tenetur iure porro, quidem voluptatem sed deleniti error odit, labore quaerat earum inventore voluptate asperiores maiores mollitia quia tempora qui.</p>}
//     </div>
//   )
// }

// export default Cls

// npm i react-bootstrap