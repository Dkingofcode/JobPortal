import React, { useState } from 'react';
import axios from 'axios';
//import { navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const api = axios.create({
        baseURL: 'https://jobportal-3-1vi0.onrender.com', // Replace with your backend URL
      });

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

     const  handleSubmit = async (e) => {
        e.preventDefault();
        // Add form submission logic here
        try { 
        const result = await api.post('http://localhost:8000/api/signup', formData); 
            console.log('Signup successful', result.data);
        }catch(error) {
            console.error('There was an error signing up!', error);
        };
        navigate('/login');
        console.log('Form submitted', formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button type="submit"  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Signup</button>
                    <p>Already have an account? <a href='/login'>Log in</a></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;