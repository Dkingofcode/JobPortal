import React, { useState } from 'react';
import axios from 'axios';

const PostJob = () => {
    const [job, setJob] = useState({ title: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post('/api/employer/job', job);
            alert('Job posted successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Job Title' 
                value={job.title} 
                onChange={(e) => setJob({ ...job, title: e.target.value })} 
             />
             <textarea 
                placeholder='Job Description' 
                value={job.description} 
                onChange={(e) => setJob({ ...job, description: e.target.value })} 
            />
            <button type='submit'>Post Job</button>
        </form>
    );
};

export default PostJob;