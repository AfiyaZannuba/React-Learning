import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `Count: ${count}`;
    }, [count]);
  return (
    <section>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </section>
  )
}

export default CounterEffect