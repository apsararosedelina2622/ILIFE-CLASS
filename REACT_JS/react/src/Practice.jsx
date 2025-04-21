// import App1 from './App1';
// import './Main.css';
// import mod from './Main.module.css'

// import React, { useState } from 'react';

// 23 - 10 - 2024

// Printing Hello using function 

// function Cls(){
//   return(
//     <div>
//       <h1>Hello React</h1>
//     </div>
//   )
// }

// 24 - 10 - 2024

// Getting array value Using Map in Function component 

// function Cls(){
//   let a = [100,200,300,400];
//   return (
//     <div>
//       {a.map((val,index) =>
//         <h1>{val}</h1>
//       )}
//     </div>
//   )
// }

// Getting object value in Function component 

// function Cls(){
//   const obj = {
//     name : 'Anis',
//     age : 20
//   }
//   return(
//     <div>
//       <h1>Name is {obj.name} and Age is {obj.age}</h1>
//     </div>
//   )
// }

// Using function inside another function

// function Cls(){
//   const a = 10, b = 20;
//   function Fun2(a=0, b=0){
//     return(
//       <h1>{(a + b > 20) ? 'Yes' : 'No' }</h1>
//     )
//   }
//   return Fun2(a,b); 
// }

// Fetching data in Console log using API

// async function Cls(){
//   const url = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await url.json();
//   data.map((val)=>{
//     console.log(val.name);
//   })
// }

// Fetching API data using function inside another function in Console log 

// function Cls(){
//   async function Fun(){
//     const url = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await url.json();
//     data.map((val)=>{
//       console.log(val.name);
//     })
//   }
//   Fun()
// }

// Class Component

// class Cls extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Hello Class Component</h1>
//       </div>
//     )
//   }
// }

// class Cls extends React.Component{
//   render(){
//     const a=50, b=20;
//     return (
//       <div>
//         <h1>{a + b}</h1>
//       </div>
//     )
//   }
// }

// class Cls extends React.Component{
//   render(){
//     const a = 10;
//     return(
//       <>
//         <h1>{ (a > 10) ? 'Yes' : 'No'}</h1>
//       </>
//     )
//   }
// }

//25 - 10 - 2024

//Exporting Numbers usings props

// function Cls() {
//   const a = 10, b = 20, c = 30, d = 40;
//   return (
//     <div>
//       <App1 a = {a}/>
//       <App1 a = {b}/>
//       <App1 a = {c}/>
//       <App1 a = {d}/>
//     </div>
//   )
// }

//Exporting Array using props

// function App(){
//   const a = [1,2,3,4];
//   return(
//     <>
//       <App1 a = {a}/>
//     </>
//   )
// }

//Exporting Objects using props

// function App(){
//   const obj = {
//     name : 'anas',
//     age : 10
//   }
//   return(
//     <>
//       <App1 obj = {obj}/>
//     </>
//   )
// }

//Component Did Mount

// class App extends React.Component{
//   componentDidMount(){
//     console.log("Hi");

//   }
//   render(){
//     return(
//       <>
//         <h1>Hello</h1>
//       </>
//     )
//   }
// }


//28 - 10 - 2024

// function App(){

//   var [value , setValue] = useState({name : "Anis", age : 20, pwd : 8080});

//   function func(){
//     setValue({name : "Anas", age : 10, pwd : 2004})
//   }

//   var {name, age, pwd} = value;

//   return(
//     <>
//       <h1>{name}</h1>
//       <h2>{age}</h2>
//       <h3>{pwd}</h3>
//       <button onClick={func}>Change Text</button>
//     </>
//   )
// }

//29 - 10 - 2024

// Event Handling using function component

// function App() {

//   function change(e){
//     console.log(e.target.value);
//   }
//   return (
//     <div>
//       <input type="text" onChange={change} />
//     </div>
//   )
// }


//   function App() {
//     function sub(e){
//       e.preventDefault();
//       console.log("Submitted");
//     }
//   return (
//     <div>
//       <form action="" onSubmit={sub}>
//           <input type="submit"/>
//       </form>
//     </div>
//   )
// }

// function App(){
//   return(
//     <>
//       <form action="" onSubmit={(e)=>{e.preventDefault(); console.log("Submitted")}}>
//         <input type="submit"/>
//       </form>
//     </>
//   )
// }

//Event Handling using class component

// class App extends React.Component{

//   Change = (e) =>{
//     console.log(e.target.value);
//   }
//   render(){
//     return(
//       <>
//         <input type="text" onChange={this.Change}/>
//       </>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     return(
//       <>
//         <input type="text" onChange={ (e) => {console.log(e.target.value)}}/>
//       </>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     return(
//       <>
//         <form action="" onSubmit={(e) => {e.preventDefault(); console.log("Submitted")}}>
//           <input type="submit"/>
//         </form>
//       </>
//     )
//   }
// }

// Adding Inline CSS 

// function App() {
//   return(
//     <>
//       <h1 style={{color:"red",background:"black"}}>Hello</h1> 
//     </>
//   )

// }

// Adding CSS in Object

// function App(){
//   const obj = {
//     color : 'blue',
//     background : 'black'
//   }

//   return(
//     <>
//       <h1 style={obj}>Hello</h1>
//     </>
//   )
// }

//Module CSS

// function App(){
//   return(
//     <>
//       <h1 className={mod.h1}>Class Hello</h1>
//       <h1 id={mod.h2}>Id Hello</h1>
//       <h1>Tag Hello</h1>
//     </>
//   )
// }

//

//   function App(){
//     const [color, setColor] = useState(["", ""]);

//     function fun(e){
//       e.preventDefault();
//       const col = e.target[0].value;
//       const bg = e.target[1].value;

//       setColor([col, bg]);
//     }

//     return(
//       <>
//         <form onSubmit={fun}>
//           <input type="text" placeholder='Enter Color'/>
//           <input type="text" placeholder='Enter Background Color'/>
//           <input type="submit"/>
//         </form>
//         <App1 content = {color}/>
//       </>
//     )
//   }

// export default App;

// import React from 'react'
// import Cons1 from './UseContext/Cons1'
// import UseContext from './UseContext/UseContext'
// import Cons2 from './UseContext/Cons2'
// import Cons3 from './UseContext/Cons3'

// function App() {
//   return (
//     <UseContext>
//       <Cons1/>
//       <Cons2/>
//       <Cons3/>
//     </UseContext>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Function from './Function'

// const Practice = () => {
//   const [a,setA] = useState([])
//   return (
//     <div>
//       <Function val={a} />
//       <button onClick={()=>setA((j)=>[...j,"Hello"])}>Click</button>
//     </div>
//   )
// }

// export default Practice

// Props  

// import React from 'react';
// import Cls from './Cls';

// const Practice = () => {
//   return (
//     <div>
//       <Cls name="John" message="Welcome to React!" />
//       <Cls name="Jane" message="Happy coding!" />
//     </div>
//   );
// };

// export default Practice;

// import React from 'react';
// import Cls from './Cls';

// const Practice = () => {

//   const userName1 = "John";
//   const userMessage1 = "Welcome to React!";

//   const userName2 = "Jane";
//   const userMessage2 = "Happy coding!";

//   return (
//     <div>
//       <Cls name={userName1} message={userMessage1} />
//       <Cls name={userName2} message={userMessage2} />
//     </div>
//   );
// };

// export default Practice;

// Exporting Array using Props

// import React from 'react';
// import Cls from './Cls';

// const App = () => {
//   const items = ['Apple', 'Mango', 'Cherry', 'Date'];

//   return (
//     <div>
//       <h1>Fruit List</h1>
//       <Cls items={items} />
//     </div>
//   );
// };

// export default App;

// Exporting Object using Props

// import React from 'react';
// import Cls from './Cls';

// const Practice = () => {
//   const users = [
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Jane', age: 30 },
//     { id: 3, name: 'Alice', age: 28 },
//     { id: 1, name: 'John', age: 25 },
//     { id: 2, name: 'Jane', age: 30 },
//     { id: 3, name: 'Alice', age: 28 },
//   ];

//   return (
//     <div>
//       <h1>User List</h1>
//       <Cls users={users} />
//     </div>
//   );
// };

// export default Practice;


// import React from 'react'

// const Practice = () => {
//   let data = [
//     {
//       name : 'Abi',
//       age : 20
//     },
//     {
//       name : 'Bhavi',
//       age : 23
//     },
//     {
//       name : 'Ravi',
//       age : 25
//     },
//     {
//       name : 'Ragavi',
//       age : 13
//     },
//     {
//       name : 'Pavi',
//       age : 15
//     }
//   ]
//   return(
//     <>
//     <p>{data.length}</p>
//     <p>{data[4].age}</p>
//     {data.map((val,index) => {
//       return(
//         <div key={index}>
//         <p>Name : {val.name} Age : {val.age}</p>
//         </div>
//       )
//     })}
//     </>
//   )
// }

// export default Practice


// import React, { useState } from 'react';

// function Cls() {
//   const [count, setCount] = useState(0);

//   const Inc = () => {
//     if(count < 10){
//       setCount(count + 1)
//     }
//   }

//   const Dec = () => {
//     if(count > 0){
//       setCount(count - 1)
//     }
//   }

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={Inc}>Increase</button>
//       <button onClick={Dec}>Decrease</button>
//     </div>
//   );
// }

// export default Cls;

// import React, { useState } from 'react'

// const Practice = () => {

//     var [value , setValue] = useState({name : "Anis", age : 20, pwd : 8080});

//     function func(){
//       setValue({name : "Abi", age : 10, pwd : 2004})
//     }

//     var {name, age, pwd} = value;

//     return(
//       <>
//         <h1>{name}</h1>
//         <h2>{age}</h2>
//         <h3>{pwd}</h3>
//         <button onClick={func}>Change Text</button>
//       </>
//     )
// }

// export default Practice

// Events 

// import React from "react";

// function Practice() {
//   function handleClick() {
//     alert("Hello!");
//   }

//   return <button onClick={handleClick}>Click Me</button>;
// }

// export default Practice;


// import React, { useState } from "react";

// function Practice() {
//   const [text, setText] = useState("Hello! ");

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>Typed: {text}</p>
//     </div>
//   );
// }

// export default Practice;


// import React, { useState } from "react";

// function Practice() {
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault(); 
//     alert(`Submitted Name: ${name}`);
//     setName("success")
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Practice;



// import React from 'react'
// import Cls from './Cls'

// const Practice = () => {

//   let obj = [
//         {
//           name : 'Abi',
//           age : 20
//         },
//         {
//           name : 'Bhavi',
//           age : 23
//         },
//         {
//           name : 'Ravi',
//           age : 25
//         },
//         {
//           name : 'Ragavi',
//           age : 13
//         },
//         {
//           name : 'Pavi',
//           age : 15
//         }
//       ]
//   return (
//     <Cls object={obj} />
//   )
// }

// export default Practice



// import React from 'react'

// const Practice = (props) => {
//   return (
//     <div>
//       <p>{props.data.length}</p>
//       <p>{props.data[3].name}</p>
//       {
//         props.data.map((a,b) => {
//           return(
//             <div key={b}>
//               <p>{a.name}</p>
//               <p>{a.age}</p>
//             </div>
//           )
//         })
//       }

//     </div>
//   )
// }

// export default Practice



// import React from "react";

// function Practice() {
//   const headingStyle = {
//     color: "blue",
//     background : 'red',
//     textAlign: "center"
//   };

// return (
//   <div>
//     <h1 style={headingStyle}>Hello</h1>
//     <p style={{ color : 'red', background: 'blue' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem eligendi doloremque optio facilis dolorum, magnam sed. Vero odit at provident, qui, ducimus reprehenderit a atque veniam optio distinctio saepe.</p>
//   </div>
// );
// }

// export default Practice;


// import React from "react";
// import "./index.css";

// function Practice() {
//   return <h2>Styled using External CSS</h2>;
// }

// export default Practice;



// import React from 'react'
// import style from './App.module.css'

// const Practice = () => {
//   return (
//     <div>
//       <h1 className={style.title}>Welcome</h1>
//       <p className={style.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia in aliquam temporibus harum tempora consectetur doloremque neque saepe, laudantium ipsum voluptatibus doloribus impedit, velit placeat aspernatur iste minus vel!</p>
//     </div>
//   )
// }

// export default Practice


// import React from 'react'
// import img1 from './img/tae.png'
// import img2 from './img/suga.png'
// import img3 from './img/jimin.png'
// import img4 from './img/jk.png'

// const Practice = () => {
//   return (
//     <div>
//       <img src={img1} alt="" height={200} width={200} />
//       <img src={img2} alt="" height={200} width={200} />
//       <img src={img3} alt="" height={200} width={200} />
//       <img src={img4} alt="" height={200} width={200} />
//     </div>
//   )
// }

// export default Practice




// import React, { useEffect, useState } from 'react'

// const Practice = ({getItems}) => {

//   const [items, setItems] = useState([])

//   useEffect(()=>{
//     setItems(getItems())
//     console.log("Get Items Function Working");
//   },[getItems])

//   return (
//     <div>
//       {items.map((value,index) => {
//         return(
//           <div key={index}>
//             <p>{value}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Practice





// import React, { useEffect, useState } from 'react'

// const Practice = ({getItems}) => {

//   const [items, setItems] = useState([])

//   useEffect(()=>{
//     setItems(getItems())
//     // setItems(getItems)
//     console.log("Get Items Function Working");
//   },[getItems])

//   return (
//     <div>
//       {items.map((value,index) => {
//         return(
//           <div key={index}>
//             <p>{value}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Practice





// import React, { useCallback, useMemo, useState } from 'react'
// import Cls from './Cls'

// const Practice = () => {

//   const [number, setNumber] = useState(0)

//   const [theme, setTheme] = useState(false)

//   // const getItems = () => {
//   //   return [number - 1, number , number + 1]
//   // }

//   const getItems = useCallback(() => {
//     return [number - 1, number , number + 1]
//   },[number])

//   // const getItems = useMemo(() => {
//   //   return [number - 1, number , number + 1]
//   // },[number])

//   const Style = {
//     color : theme ? 'white' : 'black',
//     background : theme ? 'black' : 'white'
//   }

//   return (
//     <div style={Style}>
//       <input type="text" value={number} onChange={e => setNumber(Number(e.target.value))} />
//       <button onClick={() => setTheme(!theme)}>Theme</button>
//       <Cls getItems={getItems} />
//     </div>
//   )
// }

// export default Practice







// import React, { useEffect, useMemo, useState } from 'react'

// const Practice = () => {

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

//   const Style = {
//     color : theme ? 'white' : 'black',
//     background : theme ? 'black' : 'white'
//   }

//   return (
//     <div style={Style}>
//       <h1>{value}</h1>
//       <input type="number" value={num} onChange={e => setNum(e.target.value)} />
//       <button onClick={()=>setTheme(!theme)}>Theme</button>
//     </div>
//   )
// }

// export default Practice

// function Slow(num){
//   console.log('Slow');
//   for(let i = 1; i <= 1000000000; i++){}
//   return num * 2;
// }



// import React, { useState } from 'react'

// const Practice = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   return (

//     <div>
//       {isVisible && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, officia. Sed praesentium alias saepe labore itaque maxime ipsum exercitationem culpa illum. Adipisci, aspernatur? Pariatur quis odit, libero hic atque doloribus.</p>}    

//       <button onClick={()=> setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>  
//     </div>
//   )
// }

// export default Practice



// import { useState, useEffect } from "react";

// function Practice() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup function to stop interval
//   }, []);


//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Current Time</h2>
//       <h1>{time}</h1>
//     </div>
//   );
// }

// export default Practice;


// import React, { useEffect, useState } from 'react'

// const Practice = () => {

//   const [time, setTime] = useState(new Date().toLocaleTimeString())

//   useEffect(()=>{
//     const interval = setInterval(()=>{
//       setTime(new Date().toLocaleTimeString())
//     }, 1000)

//     return () => clearInterval(interval)
//   },[])

//   // console.log(new Date().toLocaleTimeString());
  
//   return (
//     <div>
//       <h2>Current Time</h2>
//       <h1>{time}</h1>
//     </div>
//   )
// }

// export default Practice




// import React, { useEffect, useState } from 'react'

// const Practice = ({getItems}) => {

//     const [items,setItems] = useState([])

//     useEffect(()=>{
//         console.log("Get Items Function Working");
//         setItems(getItems())
//         // setItems(getItems)
//     },[getItems])

//   return (
//     <div>
//         <p>Practice Componant</p>
//         {items.map((a,b)=> {
//             return(
//                 <div key={b}>
//                     <p>{a}</p>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default Practice




// import React, { useEffect, useState } from 'react'

// const Practice = ({getItems}) => {

//     const [items, setItems] = useState([])

//     useEffect(()=>{
//         console.log("GetItems Function");
//         setItems(getItems())
//     },[getItems])

//   return (
//     <div>
//         {
//             items.map((value, index) => {
//                  return(
//                     <div key={index}>
//                         <p>{value}</p>
//                     </div>
//                  )
//             })
//         }
//     </div>
//   )
// }

// export default Practice


// import React, { useState } from 'react'

// const Practice = () => {

//     const [input, setInput] = useState('')
//     const [list, setList] = useState([])
//     const [editText, setEditText] = useState('')
//     const [edit, setEdit] = useState(null)

//     const Add = () => {
//         setList(prev => [...prev, input])
//         setInput('')
//     }

//     const Delete = (index) => {
//         if(window.confirm('Are You Sure Want To Delete?')){
//             setList(list.filter((a,i) => i !== index))
//         }
//     }

//     const Edit = (index) => {
//         setEdit(index)
//         setEditText(list[index])
//     }

//     const Update = () => {
//         const update = list.map((value,i) => (i === edit ? editText : value))
//         setList(update);
//         setEdit(null)
//         setEditText('')
//     }

//   return (
//     <div>
//         <div className="container">
//             <input type="text" className='form-control' value={input} onChange={e => setInput(e.target.value)} />
//             <button onClick={Add}>Add</button>
//         </div>
//         <p>{list.map((value,index) => {
//             return(
//                 <table>
//                     <tr>
//                         {edit === index ? (
//                             <input type='text' value={editText} onChange={e => setEditText(e.target.value)} />
//                         ) : (
//                             <td>{value}</td>
//                         )}
//                         <td>
//                             {edit === index ? (
//                                 <button onClick={Update}>Update</button>
//                             ) : (
//                                 <button onClick={() => Edit(index)}>Edit</button>
//                             )}
//                         </td>
//                         <td><button onClick={() => Delete(index)}>Delete</button></td>
//                     </tr>
//                 </table>
//             )
//         })}</p>

//     </div>
//   )
// }

// export default Practice




import { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Name is required!");
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
