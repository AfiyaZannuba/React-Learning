import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {

    const {UpdateUser} = useContext(UserContext);
    const [newName, setNewname] = useState('');
    const handleSubmit = (e) => {

        e.preventDefault();
        if(newName.trim()){
            UpdateUser(newName);
            setNewname('');
        }
    }
  return (
    <div>
        <h2>Update Username</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter new name' value={newName} onChange={(e)=>setNewname(e.target.value)} />
            <button>Submit</button>

        </form>
    </div>
  )
}

export default UpdateUser