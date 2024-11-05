// State is a way to store and manage data that can change over time 
// and affects how the component renders. We define state using useState hook, 
//which allows you to set an intial value and provides a way to update that state.

import { useState } from "react"

const App = () => {
  const [movie, setMovie] = useState([
    {id: 1,
      title: "Aram",
      ratings: 5
    },
    {id: 2,
      title: "Spider Man",
      ratings: 7
    },
    {
      id: 3,
      title: "Karam",
      ratings: 10
    }
  ])

  const handleClick = () => {
    setMovie(movie.map((m)=>m.id===1 ? {...movie, title: "John Wick 5"} : m ))
  }
  const handleAdd = () => {
    setMovie({...movie, id:4, title: "Malayalam", rating: 10})
  }
  return (
    <section>
      {movie.map((movie)=>(
        <li key={Math.random()}>{movie.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
      <button onClick={handleAdd}>Add New Movie</button>
    </section>
  )
}

export default App