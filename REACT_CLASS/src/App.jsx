import React from 'react'

// import Day1_Bootstrap from './Day1_Bootstrap'
// import Day2_UseEffect from './Day2_UseEffect'
// import Day3_Reducer from './Day3_Reducer'
import ContextFile from './context/ContextFile'
import Example1 from './Example1'
import Example2 from './Example2'

const App = () => {
  return (
    <>
      {/* <Day1_Bootstrap /> */}
      {/* <Day2_UseEffect /> */}
      {/* <Day3_Reducer /> */}
      <ContextFile>
        <Example1 />
        <Example2 />
      </ContextFile>
    </>
  )
}

export default App