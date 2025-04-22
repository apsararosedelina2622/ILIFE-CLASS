// DIGITAL CLOCK

    // import React, { useState } from 'react';

    // const Day5_State = () => {
    //   const [time, setTime] = useState(new Date().toLocaleTimeString());

    //   const updateTime = () => {
    //     setTime(new Date().toLocaleTimeString());
    //   };

    //   setInterval(updateTime, 1000); // Update time every second

    //   return (
    //     <div style={{ fontSize: '50px', textAlign: 'center', marginTop: '20%' }}>
    //       {time}
    //     </div>
    //   );
    // };

    // export default Day5_State;

// QR CODE GENERATOR

    import React, { useState } from 'react'

    const Day5_State = () => {
        const [text, setText] = useState('');
        const [qr, setQr] = useState('');
    
        const handleClick = () => {
          setQr(`https://api.qrserver.com/v1/create-qr-code/?data=${text}`);
        };
    
        return (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <input onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
            <button onClick={handleClick}>Generate</button>
            <div>
              {qr && <img src={qr} alt="QR Code" style={{ marginTop: '20px' }} />}
            </div>
          </div>
        );
    }

    export default Day5_State

// SIMPLE CALCULATOR 

    // import React, { useState } from 'react';

    // const Day5_State = () => {

    //   const [value, setValue] = useState("")

    //   // To display the expression
    //   const display = (e) => {
    //     setValue(value + e.target.value)
    //   }

    //   // To delete last value in input box
    //   const delete_button = () => {
    //     setValue(value.slice(0,-1))
    //   }
    
    //   // To clear all the values in input box
    //   const clear_button = () => {
    //     setValue("")
    //   }

    //   // To display the result of the expression  
    //   const sum = () => {
    //     try {
    //       setValue(eval(value));
    //     } catch (error) {
    //       alert("Invalid Expression");
    //       setValue(""); 
    //     }
    //   }
    
    //   return (
    //     <div className='container'>
    //       <div className='calculator'>
    //         <form>
    //           <div className='display'>
    //             <input type="text" value={value} readOnly />
    //           </div>
    //           <div>
    //             <input type="button" value='AC' onClick={clear_button} />
    //             <input type="button" value='DE' onClick={delete_button}/>
    //             <input type="button" value='.' onClick={display}/>
    //             <input type="button" value='/' onClick={display}/>
    //           </div>   
    //           <div>
    //             <input type="button" value='7' onClick={display}/>
    //             <input type="button" value='8' onClick={display}/>
    //             <input type="button" value='9' onClick={display}/>
    //             <input type="button" value='*' onClick={display}/>
    //           </div>  
    //           <div>
    //             <input type="button" value='4' onClick={display}/>
    //             <input type="button" value='5' onClick={display}/>
    //             <input type="button" value='6' onClick={display}/>
    //             <input type="button" value='-' onClick={display}/>
    //           </div> 
    //           <div>
    //             <input type="button" value='1' onClick={display}/>
    //             <input type="button" value='2' onClick={display}/>
    //             <input type="button" value='3' onClick={display}/>
    //             <input type="button" value='+' onClick={display}/>
    //           </div> 
    //           <div>
    //             <input type="button" value='00' onClick={display}/>
    //             <input type="button" value='0' onClick={display}/>
    //             <input type="button" value='=' onClick={sum} className='equal_button'/>
    //           </div> 
    //         </form>
    //       </div>
    //     </div>
    //   )
    // }

    // export default Day5_State;