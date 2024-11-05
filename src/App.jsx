const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10));
  return <button onClick={handleClick}>Click Me</button>
}

const Copy = () => {
  const handleCopy = () => console.log(Math.round(Math.random()*10))
  return(
    <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor quos repudiandae reiciendis tempora ducimus voluptatibus voluptates laudantium nobis aliquam.</p>
  )
}

const  Move = () => {
  const handleMove = () => alert("Mouse move event fired");
  return (
    <p onMouseMove={handleMove}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, eveniet.</p>
  )
}

const App = () => {
  return (
    <section>
      <Button />
      <Copy />
      <Move />
    </section>
  )
}

export default App