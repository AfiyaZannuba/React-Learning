import React from 'react'
import { useContext } from 'react';
import { Data } from './App';

const ComponentC = () => {
    const username = useContext(Data)
  return (
    <div>
       <h1>My Name is : {username}</h1>
    </div>
  )
}

export default ComponentC;