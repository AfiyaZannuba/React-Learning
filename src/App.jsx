import React from 'react'
import { createContext } from 'react'
import ComponentA from './ComponentA'


export const Data = createContext();
const App = () => {

  const name = "Afiya"
  return (
    <div>
      <Data.Provider value={name}>
      <ComponentA />
      </Data.Provider>
    </div>
  )
}

export default App