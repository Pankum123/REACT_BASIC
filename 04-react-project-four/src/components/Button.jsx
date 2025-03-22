import React from 'react'

function Button(props) {
  return (
    <div>
      {props.children}
      <buttun onClick={props.handleClick}>
        {props.text}
      </buttun>
    </div>
    
  )
}

export default Button
