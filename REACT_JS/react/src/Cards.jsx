import React from 'react'
import tae from './img/tae.png'
import jk from "./img/jk.png"
import jimin from "./img/jimin.png"
import suga from "./img/suga.png"
import Cards1 from './Cards1'


function Cards() {
    const card1 = {
        img : tae,
        name : "Kim Taehyung",
        role : "HR",
        about : "asdfghjklasdfghjksdfghjkasdfghjkasdfghjasdfghjsdfghjksdfghjertydfghsdfgh"
    }
    const card2 = {
        img : jk,
        name : "Jeon Jungkook",
        role : "Team Leader",
        about : "asdfghjklasdfghjksdfghjkasdfghjkasdfghjasdfghjsdfghjksdfghjertydfghsdfgh"
    }
    const card3 = {
        img : jimin,
        name : "Park Jimin",
        role : "CEO",
        about : "asdfghjklasdfghjksdfghjkasdfghjkasdfghjasdfghjsdfghjksdfghjertydfghsdfgh"
    }
    const card4 = {
        img : suga,
        name : "Min Yoongi",
        role : "Manager",
        about : "asdfghjklasdfghjksdfghjkasdfghjkasdfghjasdfghjsdfghjksdfghjertydfghsdfgh"
    }
    
  return (
    <div className='container'>
        <div className='row'>

            <Cards1 c1 = {card1}/>
            <Cards1 c1 = {card2} />
            <Cards1 c1 = {card3} />
            <Cards1 c1 = {card4} />
        
        </div>
    </div>
   
  )
}

export default Cards