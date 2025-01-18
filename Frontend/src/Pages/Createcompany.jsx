import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const CreateCompany = () => {
    const [companyName, setCompanyName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const email = localStorage.getItem("email");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        if (companyName.trim() === '') {
            alert('Company Name is required');
            return;
        }
        const response = await axios.post("http://localhost:5000/api/company", companyName, email);
        const notify = toast("Company registered successfully");
        if(response){
         notify();
        }
        setSubmitted(true);
        // Here you can add the logic to send the company name to your backend
        console.log('Company Name:', companyName);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Create Company</h1>
                {submitted ? (
                    <p className="text-green-500 text-center">Company {companyName} has been registered successfully!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name:</label>
                            <input
                                type="text"
                                id="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            Register
                        </button>
                    </form>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreateCompany;