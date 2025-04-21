// DAY - 4

// HOOKS

// USE STATE

// ADD COUNTER WITH USE STATE

    // import React from 'react'

    // const Day4_State_1 = () => {
    //     var num = 1;

    //     const addFun = () => {
    //         num = num + 1;
    //         console.log(num)
    //     }

    //     return (
    //         <>
        //         <h1>{num}</h1>
        //         <button onClick={addFun}>Add</button>
    //         </>
    //     )
    // }

    // export default Day4_State_1

// ADD & REMOVE COUNTER WITH USE STATE

    // import React, { useState } from 'react'

    // const Day4_State_1 = () => {

    //   var [num, setNum] = useState(1)

    //   const addFun = () => {
    //     setNum(num+1)
    //   }

    //   const removeFun = () => {
    //     setNum(num-1)
    //   }

    //   return (
    //     <>
    //       <h1>{num}</h1>
    //       <button onClick={addFun}>Add</button>
    //       <button onClick={removeFun}>Remove</button>
    //     </>
    //   )
    // }

    // export default Day4_State_1

// TASK ( COUNTER WITH LIMIT )

    // import React, { useState } from 'react'

    // const Day4_State_1 = () => {

    //   var [num, setNum] = useState(0);
    //   var [error, setError ] = useState('');

    //   const addFun = () => {
    //     if(num < 10){
    //       setNum(num+1)
    //       setError('')
    //     }
    //     else{
    //       setError('Maximum Limit')
    //     }
    //   }

    //   const removeFun = () => {
    //     if(num > 0){
    //       setNum(num-1)
    //       setError('')
    //     }
    //     else{
    //       setError('Minimum Limit')
    //     }
    //   }

    //   return (
    //     <>
    //       <h1>{num}</h1>
    //       <button onClick={addFun}>Add</button>
    //       <button onClick={removeFun}>Remove</button>
    //       <p>{error}</p>
    //     </>
    //   )
    // }

    // export default Day4_State_1

// HIDE SHOW TEXT

    // import React, { useState } from 'react';

    // const Day4_State_1 = () => {
    //   const [isVisible, setIsVisible] = useState(true); 
    
    //   const toggleVisibility = () => {
    //     setIsVisible(!isVisible); 
    //   };
    
    //   return (
    //     <div>
    //       <button onClick={toggleVisibility}>
    //         {isVisible ? 'Hide' : 'Show'} Text
    //       </button>
    //        <h1>{isVisible && 'This is some text that can be shown or hidden.'}</h1>
    //     </div>
    //   );
    // };
    
    // export default Day4_State_1;

// HIDE SHOW PASSWORD

    // import React, { useState } from 'react'
    
    // const Day4_State_1 = () => {

    //     var [show, setShow] = useState(false)

    //     // const showPassoword = () => {
    //     //     setShow(!show)
    //     // }

    //     return (
    //         <>
    //             <input type={show ? 'text' : 'password'} />
    //             {/* <button onClick={showPassoword}>{show ? 'Hide' : 'Show'}</button> */}
    //             <button onClick={() => {setShow(!show)}}>{show ? 'Hide' : 'Show'}</button>
    //         </>
    //     )
    // }
    
    // export default Day4_State_1

// TOGGLE THEME

    // import React, { useState } from 'react'
    
    // const Day4_State_1 = () => {

    //     var [darkMode, setDarkMode] = useState(true)

    //     var themeStyle = {
    //         color : darkMode ? 'white' : 'black',
    //         backgroundColor : darkMode ? 'black' : 'white',
    //         padding : '30px'
    //     }

    //     // const toggleTheme = () => {
    //     //     setDarkMode(!darkMode)
    //     // }

    //     return (
    //         <>
    //             <div style={themeStyle}>
    //                 <p>This is {darkMode ? 'Dark' : 'Light'} Mode</p>
    //             </div>
    //             <br />
    //             {/* <button onClick={toggleTheme}>{darkMode ? 'Light' : 'Dark'}</button> */}
    //             <button onClick={() => {setDarkMode(!darkMode)}}>{darkMode ? 'Light' : 'Dark'}</button>
    //         </>
    //     )
    // }
    
    // export default Day4_State_1