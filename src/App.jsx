// State is a way to store and manage data that can change over time 
// and affects how the component renders. We define state using useState hook, 
//which allows you to set an intial value and provides a way to update that state.

import { useState } from "react"
import ComponentOne from "./components/ComponentOne"
import ComponentTwo from "./components/ComponentTwo"

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <section>
      <ComponentOne count={count} setCount={setCount}/>
      <ComponentTwo />
    </section>
  )
}

export default App