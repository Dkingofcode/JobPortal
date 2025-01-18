import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateJob = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState(''); // e.g., Full-time, Part-time
    const [experience, setExperience] = useState(''); // e.g., Entry-level, Mid-level
    const [position, setPosition] = useState(''); // e.g., Developer, Manager
    const [companyName, setCompanyName] = useState(''); // Replace with actual company ID

    const navigate = useNavigate();
    const notify = () => toast("Your company is not registered!");
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const jobData = {
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            experience,
            position,
            companyName,
        };

        try {
            const response = await axios.post("http://localhost:5000/api/employer/job", jobData);
            if (response.data.job) {
                console.log('Job successfully posted:', response.data.job);
                navigate('/jobs');
            }
        } catch (error) {
            if(error.response.data.message === "Register your company"){
              notify();
            }
            console.log(error);
            console.log(error.response.data.message);

            console.error('Error posting job:', error);
        }
    };

    return (
        <div className="create-job max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Create a Job Posting</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Job Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Job Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Requirements:</label>
                    <textarea
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Salary:</label>
                    <input
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Job Type:</label>
                    <select
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Experience Level:</label>
                    <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select Experience Level</option>
                        <option value="Entry-level">Entry-level</option>
                        <option value="Mid-level">Mid-level</option>
                        <option value="Senior-level">Senior-level</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Position:</label>
                    <input
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Company Name:</label>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Post Job
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CreateJob;
