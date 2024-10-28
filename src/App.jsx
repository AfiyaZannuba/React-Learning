
const App = () => {
  const myName = "Afiya Zannuba";
  const myFriends = [ 'Afiya', 'Alex', 'John'];
  const multiply = (a,b) => a*b;
  const specialClass = "simple-class";

  return (
    <section>
      <p>2 + 2 = {2 + 2}</p>
      <h1>{myName}</h1>
      <p>My Friends List : {myFriends}</p>
      <p>Multiply 2*2 = {multiply(2,2)}</p>
      <p className={specialClass}>This is special class</p>
    </section>
  )
}

export default App;