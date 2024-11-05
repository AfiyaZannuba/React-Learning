import React, { useCallback, useState } from 'react'

const Todolist = () => {
    const[todo,setTodo] = useState([])
    const[inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            setTodo([...todo, inputValue]);
            setInputValue("");
        }
    }
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
  return (
    <div>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder='enter your task' />
            <button type="submit">Submit</button>
        </form>
        <ul>
            {todo.map((item)=>(
                <li key={Math.random()}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todolist