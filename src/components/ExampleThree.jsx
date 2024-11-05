import React, { useState } from 'react'

const ExampleThree = () => {
    const [randomNumber,setRandomNumber] = useState(()=>{
        return Math.floor(Math.random()*100);
    })
    const handleClick = () => {
        setRandomNumber(()=>{return Math.floor(Math.random()*1000)})
    }
  return (
    <div>
        <h1>{randomNumber}</h1><button onClick={handleClick}>Update</button>
    </div>
  )
}

export default ExampleThree