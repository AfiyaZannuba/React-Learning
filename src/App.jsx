import { useState, useEffect } from "react"




const App = () => {

  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0)

  const handleClick = () => {
    setValue(value + 1)
  }
  const handleClicks = () => {
    setSomething(something + 1)
  }

  useEffect(()=>{
    console.log('call useEffect');
    document.title= `Increment ${value}`
  }, [value])

  return (
    <section>
    <h2>{value}</h2>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClicks}>Increment Me</button>
    </section>
  )
}

export default App