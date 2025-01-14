import React, { useEffect, useState } from 'react';
import axios from "axios";

const JobSearch = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await axios.get('/api/jobs');
            setJobs(response.data);
        };

        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>
            {jobs.map((job) => (
                <div key={job.id}>
                    <h2>{job.title}</h2>
                     <p>{job.description}</p>
                </div>
            ))}
        </div>
    );
};

export default JobSearch;



























