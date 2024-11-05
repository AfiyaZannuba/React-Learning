import React from 'react'

const ComponentOne = ({count, setCount}) => {
    const handleClick = () => {
        setCount(count+1);
    }
  return (
    <div>
        <p>{count}</p>
<button onClick={handleClick}>Add</button>
    </div>
  )
}

export default ComponentOne