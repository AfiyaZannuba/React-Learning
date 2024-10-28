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
      {userInfo.map((user) => (
        <ul key={Math.random()}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </main>
  )
}

export default App;