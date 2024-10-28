import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  const myName = "Afiya Zannuba";
  const myFriends = [ 'Afiya', 'Alex', 'John'];
  const multiply = (a,b) => a*b;
  const specialClass = "simple-class";

  return (
    <section>
      <Greeting />
      <ProductInfo />
    </section>
  )
}

export default App;