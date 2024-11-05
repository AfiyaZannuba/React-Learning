import React, { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        age: ""
    })
    const handleChange = (e) =>{
        const {name, value} = e.target;

        setProfile((prevProfile)=>({
            ...prevProfile,
            [name]:value,
        }))
    }
    return(
    <div>
       <h2>User Profile</h2>
       <div>
        <label>
        Name:
        <input type="text" name="name" value={profile.name} placeholder='enter name' onChange={handleChange}/>
        </label>
       </div>
       <div>
        <label>
        Age:
        <input type="number" name="age" value={profile.age} placeholder='enter age' onChange={handleChange}/>
        </label>
       </div>
       <h3>Profile Information</h3>
       <p>{profile.name}</p>
       <p>{profile.age}</p>
    </div>
  )
}

export default Profile