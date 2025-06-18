import React from 'react'

// import Day1_Intro from './Day1_Intro'
// import Day2_Js from './Day2_Js'
// import Day3_Props_1 from './Day3_Props_1'
// import Day4_State_1 from './Day4_State_1'
// import Day5_State_2 from './Day5_State_2'
// import Day6_Bootstrap from './Day6_Bootstrap'
// import Day7_Effect from './Day7_Effect'
// import Day8_Reducer_Ref from './Day8_Reducer_Ref'
// import Example1 from './Example1'
import ContextFile from './context/ContextFile'
import Example1 from './Example1'
import Example2 from './Example2'

const App = () => {
  return (
    <>
      {/* <Day1_Intro /> */}
      {/* <Day2_Js /> */}
      {/* <Day3_Props_1 /> */}
      {/* <Day4_State_1 /> */}
      {/* <Day5_State_2 /> */}
      {/* <Day6_Bootstrap /> */}
      {/* <Day7_Effect /> */}
      {/* <Day8_Reducer_Ref /> */}
      {/* <Example1 /> */}
      <ContextFile>
        <Example1 />
        <Example2 />
      </ContextFile>
    </>
  )
}

export default App