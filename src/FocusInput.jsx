import React from 'react'
import { useRef } from 'react'

const FocusInput = () => {

    const element = useRef(null)
    const focusInput = () => {
        if(element.current){
            element.current.focus();
        }
    }
  return (
    <div>
        <input type="text" ref={element} placeholder='click the button to focus' />
        <button onClick={focusInput}>Focus input</button>
    </div>
  )
}

export default FocusInput