
const App = () => {
  return (
    <User name="Afiya zannuba" age={22} married={false} hobbies={["coding", "Reading", "Sleeping"]}/>
  )
}

const User = ({name, age, married, hobbies}) => {
  return(
    <section>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Hobbies: {hobbies}</h3>
      <h4>IsMarried: {married}</h4>
    </section>
  )
}

export default App;