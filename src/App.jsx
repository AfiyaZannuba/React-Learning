import { useState, useEffect } from "react"




const App = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{

    async function getData(){
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json()
      if (data && data.length){
        setData(data);
      }
    }

    getData();

  },[])
  return (
    <section>
     {data.map((item)=>(
      <ul key={Math.random()}>
      <li>
        {item.title}
      </li>
      </ul>
     ))}
    </section>
  )
}

export default App