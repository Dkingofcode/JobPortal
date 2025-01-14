import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        skills: '',
        experience: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/jobseeker/profile', profile);
            alert('Profile created successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
               type="text" 
               placeholder="Name" 
               value={profile.name} 
               onChange={(e) => setProfile({ ...profile, name: e.target.value })} 
               />
               <textarea placeholder="Skills"
               value={profile.skills}
               onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
               />

               <input 
                   type="text" 
                   placeholder="Experience" 
                   value={profile.experience} 
                   onChange={(e) => setProfile({ ...profile, experience: e.target.value })} 
                />
               <button type="submit">Save Profile</button>
        </form>
    )
}

export default Profile;