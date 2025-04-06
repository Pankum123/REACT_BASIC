import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const vishal = useNavigate();
  function pankaj(){
    vishal('/dashboard')
  }
  return (
    <div>
      About Page
      <button onClick={pankaj}>
        Move to Dashboard
      </button>
    </div>
  )
}

export default About
