import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [appliedJobs, setAppliedJobs] = useState([]); // Track applied jobs

    const navigate = useNavigate();
    
    useEffect(() => {
        // Fetch jobs from an API or database
        const fetchJobs = async () => {
            const response = await fetch('https://jobportalbackend-uztv.onrender.com/api/jobs');
            const data = await response.json();
            console.log(data);
            setJobs(data.jobs);
            setFilteredJobs(data.jobs);
        };

        fetchJobs();
    }, []);

    useEffect(() => {
        let filtered = jobs;

        if (searchTerm) {
            filtered = filtered.filter(job =>
                job.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (category) {
            filtered = filtered.filter(job => job.category === category);
        }

        setFilteredJobs(filtered);
    }, [searchTerm, category, jobs]);

    const handleApply = (job) => {
        console.log(job);
        navigate(`/jobs/${job.id}/apply`, { state: { job } });
    //     if (!appliedJobs.includes(jobId)) {
    //         setAppliedJobs([...appliedJobs, jobId]);
    //     }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
            <div className="mb-4 flex space-x-4">
                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full"
                />
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                >
                    <option value="">All Categories</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <ul className="space-y-4">
                {filteredJobs.map(job => (
                    <li key={job.id} className="border border-gray-300 p-4 rounded shadow">
                        <h2 className="text-2xl font-bold">{job.title}</h2>
                        <p className="text-gray-700">{job.description}</p>
                        <p className="text-gray-500">Category: {job.category}</p>
                        <p className="text-gray-500">Location: {job.location}</p>
                        <button
                            onClick={() => handleApply(job)} // Pass a function reference
                            className={`p-5 rounded-md font-bold text-xl ${
                                appliedJobs.includes(job.id)
                                    ? 'bg-purple-200 text-purple-600'
                                    : 'bg-purple-600 text-white'
                            }`}
                        >
                            {appliedJobs.includes(job.id) ? 'Applied' : 'Apply'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobsPage;
