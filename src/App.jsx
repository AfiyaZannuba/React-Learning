import { useRef } from "react"
const App = () => {
  const inputElement = useRef(null);
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = 'Afiya'
  }
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={()=> focusInput()}>Focus & Write</button>
    </div>
  )
}

export default App