// State is a way to store and manage data that can change over time 
// and affects how the component renders. We define state using useState hook, 
//which allows you to set an intial value and provides a way to update that state.

import { useState } from "react"

const App = () => {

  const [friends, setFriends] = useState(['Alex', 'Afiya'])
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount (count + 1);
  }
  const decrement = () => {
    if (count>0){
    setCount (count - 1);
    }
  }
  const AddFriend = () => {
    setFriends([...friends, "Allen"])
  }
  const RemoveFriend = () => {
    setFriends(friends.filter((f)=> (f != "Allen")))
  }
  const UpDatefriend = () => {
    setFriends(friends.map((f)=>(f==="Afiya" ? "Afiya Zannuba" : f)));
  }
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      {friends.map((friend)=>(
        <li key={Math.round(Math.random()*10)}>{friend}</li>
      ))}

      <button onClick={AddFriend}>Add a New Friend</button>
      <button onClick={RemoveFriend}>Remove specific Friend</button>
      <button onClick={UpDatefriend}>Update</button>
    </section>
  )
}

export default App