import React from 'react'
import './card.css'

import cardImage1 from '../../asset/cardImage1.png'
import cardImage2 from "../../asset/cardImage2.png"
import cardImage3 from "../../asset/cardImage3.png"
import cardImage4 from "../../asset/cardImage4.png"

const card = (props) => {
  return (

     <div className="card">

        <img src={cardImage1} alt='cardImage'/>
        <h4 className='cardHead'>{props.head}</h4>
        <p className="cardContent">{props.content}</p>
     </div>
    
  )
}

export default card