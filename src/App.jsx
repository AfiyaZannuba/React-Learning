// import Greeting from "./components/Greeting";
// import ProductInfo from "./components/ProductInfo";

const App = () => {
  const userInfo = [
    {
      username: "Afiya",
      email: "afiya.zannuba@gmail.com",
      location: "Palakkad"
    },
    {
      username: "Zannuba",
      email: "zannuba.afiya@gmail.com",
      location: "Kakkanad"
    },
    {
      username: "Jaleel",
      email: "jaleel@gmail.com",
      location: "Kochi"
    }
  ]

  return (
    <main>
      {userInfo.map(({username, email, location}) => (
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </main>
  )
}

export default App;