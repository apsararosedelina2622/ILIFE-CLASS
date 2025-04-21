// Fetching data from from API

// import React from 'react'

// const Day3 = () => {
//   async function Fun(){
//     const url = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await url.json()
//     data.map((value) =>{
//         console.log(value.name)
//     })
//   }
//   Fun()
// }

// export default Day3


// Style

// Inline CSS

// import React from 'react'

// const Day3 = () => {
//   return (
//     <>
//         <h1 style={{"color" : "purple" , "background-color" : "plum"}}>Inline CSS</h1>
//         <p style={{"color" : "darkgreen" , backgroundColor : "lightgreen"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias blanditiis id error odio aut tenetur hic earum maxime nostrum ad quisquam labore ea architecto voluptates similique beatae in officiis porro harum necessitatibus, vel soluta quo? Harum laudantium fuga maxime, quisquam reiciendis soluta, unde est qui porro ex beatae vero rerum tempora incidunt necessitatibus quos labore laborum ea recusandae impedit ipsam aliquid iste. Blanditiis, cumque quis. Voluptate reiciendis cumque deleniti ex fuga voluptatem itaque, vitae quisquam, nam architecto consectetur voluptatum aspernatur adipisci sed. Hic id placeat nihil modi voluptates natus nulla harum dignissimos quae, odit eos at vitae repudiandae culpa voluptatibus totam? Maiores atque dolore ab, deserunt aspernatur similique soluta, inventore incidunt officia consectetur, labore laudantium veritatis. A dolores ea ipsum numquam, iusto error fugit quasi, consequatur quis explicabo doloremque perspiciatis iste officia necessitatibus reprehenderit aliquid, voluptas asperiores repudiandae praesentium. Nobis, aperiam voluptatibus harum quod odio soluta consectetur esse dignissimos alias quaerat asperiores enim obcaecati velit cupiditate tempora. Et dignissimos aperiam sed enim nulla cupiditate natus itaque voluptatem rem similique, ex rerum voluptates mollitia possimus in quas dolore, earum minima dicta! Quibusdam dolores non cum ut necessitatibus magni a tempore. Repellendus modi recusandae odio illum a exercitationem rem. Laborum, nam.</p>
//     </>
//   )
// }

// export default Day3

// Apply Style using object (internal)


// import React from 'react'

// const Day3 = () => {

//     var obj = {
//         "color" : "purple",
//         backgroundColor : "plum",
//         textAlign : "center"
//     }

//     var obj1 = {
//         "color" : "darkgreen",
//         backgroundColor : "lightgreen",
//         padding : "20px"
//     }

//   return (
//     <>
//         <h1 style={obj}>Apply Style using Object</h1>
//         <p style={obj1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis dignissimos minus voluptatem quod! Labore maxime ipsum distinctio amet illum omnis molestias mollitia, laboriosam aut esse nesciunt quod inventore unde nihil quidem, ratione maiores consequuntur sit reprehenderit eaque sequi doloribus cum error praesentium. Nemo natus dignissimos fugit tempora. Quae aspernatur velit aut ex obcaecati voluptates ratione, totam vel voluptatem sint. Quod ipsam pariatur culpa tempora molestiae provident, minima commodi dolorem fugiat ipsa esse a eligendi? Nobis saepe, repudiandae laborum quae sapiente pariatur voluptatibus ducimus, expedita nemo quos voluptatum autem. Esse placeat ullam inventore laudantium voluptatum consequatur amet voluptas. Aut, eveniet esse maxime sed dolore laborum quaerat nulla iste provident recusandae hic error inventore ullam consequatur molestiae cum dicta voluptate voluptatibus repellat doloribus at vero eius a nemo! Blanditiis facere doloremque reprehenderit excepturi quibusdam obcaecati eius perspiciatis perferendis alias nesciunt, quis rem placeat voluptas nihil, soluta consequatur cumque itaque porro harum natus doloribus, atque quo voluptate sint? Eos natus magnam quibusdam, sequi tempora, aut illo culpa voluptate vitae eligendi reiciendis qui ipsa nisi atque molestiae mollitia aperiam similique illum dolorem dolorum non. Illo reprehenderit temporibus atque quis dolores sequi facere non maxime? Maiores sed quia impedit delectus perspiciatis, laudantium repellendus consectetur?</p>
//     </>
//   )
// }

// export default Day3


// External CSS

// import React from 'react'
// // import './index.css'

// const Day3 = () => {
//   return (
//     <>
//         <h1>External CSS</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, autem iste optio ullam fuga quam asperiores praesentium dignissimos dolores voluptatem voluptas aspernatur sit aliquid, quaerat rem libero voluptatum nihil illum!</p>
//     </>
//   )
// }

// export default Day3

// Props

// Direct Props

// import React from 'react'
// import Day3props from './Day3props'

// const Day3 = () => {
//     // var name = "Begum"

//   return (
//     <>
//         {/* <h3>Name : {name}</h3> */}
//         <h1>Day 3 File</h1>
//         <Day3props student_name="Banu" message="Welcome to React" />
//     </>
//   )
// }

// export default Day3

// variable Props

// import React from 'react'
// import Day3props from './Day3props'

// const Day3 = () => {

//     var name = "Banu"
//     var age = 21
//     var place = "trichy"

//   return (
//     <>
//         <Day3props student_name={name} student_age={age} student_place={place} />
//     </>
//   )
// }

// export default Day3

// Array 

import React from 'react'
import Day3props from './Day3props'

const Day3 = () => {

  // let arr = ["HTML" , "CSS" , "BOOTSTRAP" , "JS" , "REACT"]

  // let obj = {
  //   name :"Abi",
  //   age : 21
  // }

  let data = [
    {
      name : "Banu" ,
      age : 21
    },
    {
      name : "Begum" ,
      age : 24
    },
    {
      name : "Kavi" ,
      age : 23
    }
  ]

  return (
    <>
      {/* <Day3props array_value={arr} /> */}
      {/* <Day3props obj_value={obj} /> */}
      <Day3props json_data={data} />
    </>
  )
}

export default Day3