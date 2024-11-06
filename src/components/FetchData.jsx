import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
       const fetchData = async() => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const res = await response.json();
        setData(res);
       }

       fetchData();
    },[])
  return (
    <section>
        <h1>First post title</h1>
       { data.length > 0 ? <h2>{data[0].title}</h2> : <p>Loading...</p>}
    </section>
  )
}

export default FetchData