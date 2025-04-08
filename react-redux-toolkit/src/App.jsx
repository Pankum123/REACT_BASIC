
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function hendleIncrementClick(){
    dispatch(increment());
  }

  function hendleDecrementClick(){
    dispatch(decrement());
  }

  function hendleReasetClick(){
    dispatch(reset());
  }

  function hendleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
      <button onClick={hendleIncrementClick}> + </button>
      <p>Count: {count}</p>
      <button onClick={hendleDecrementClick}> - </button>
      <br />
      <br />
      <button onClick={hendleReasetClick}> Reaset </button>
      <br />
      <br />
      <input  
        type='Number'
        value={amount}
        placeholder='Enter Amount'
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={hendleIncAmountClick}> Inc by amount </button>
    </div>
  )
}

export default App
