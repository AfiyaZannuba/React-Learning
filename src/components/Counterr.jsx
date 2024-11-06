import React from 'react'
import { useReducer, useState } from 'react'
import { counterReducer, initialState } from '../components/counterReducer';

const Counterr = () => {

   const [state, dispatch] = useReducer(counterReducer, initialState);
   const [inputValue, setInputValue] = useState(0)

   const handleIncrement = () => {
    dispatch({type: 'increment'})
   }
   const handleDecrement = () => {
    dispatch({type: 'decrement'})
   }
   const handleIncrementbyAmount = () => {
    dispatch({type: 'incrementByAmount', payload: +inputValue});
    setInputValue(0)
   }
   const handleDecrementbyAmount = () => {
    dispatch({type: 'decrementByAmount', payload: +inputValue})
    setInputValue(0)
   }
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        <div>
            <input type="number" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
            <button onClick={handleIncrementbyAmount}>Add</button>
            <button onClick={handleDecrementbyAmount}>Subtract</button>
        </div>
    </div>
  )
}

export default Counterr