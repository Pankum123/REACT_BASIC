
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] =useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <>
      <Button handleClick = {handleClick} id="button" text="click me ">
        <h1>{count}</h1>
      </Button>
      {/* <div>
        <Card name ="love babbar">
          <h1>Best WEB DEV course</h1>
          <p>Trying to be consistent in this</p>
          <p>Will complete the course soon</p>
        </Card>

        <Card children="mai ek children hu">
          Hello jee, kaise ho sare
        </Card>
      </div> */}
    </>
  )
}

export default App
