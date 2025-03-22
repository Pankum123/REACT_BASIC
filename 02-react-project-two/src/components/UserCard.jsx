import React from 'react'
import lovepic from '../assets/lovepic.jpeg'
import "./Usercard.css"

const Usercard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt={props.name} />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default Usercard
