import React, { useState, useContext } from 'react';
//import axios from 'axios';
//import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
//import Cookies from 'js-cookie'; // For cookie storage (optional, can use LocalStorage or SessionStorage)
import AuthContext from '../../context/AuthContext';
import { ToastContainer, toast }  from "react-toastify";
//import Loader from '../Loader/loader';


const Login = () => {
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     const result = axios.post('', token);
    
    // });

    // const api = axios.create({
    //     baseURL: 'http://localhost:3000', // Replace with your backend URL
    //   });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
   // const cookies = new Cookies();
   //const success = toast("Login successful");
   //const notify = toast("Invalid email or password");
  // const serverPing = toast("Server error, pls check your connection"); 
   // const [user, setUser] = useState(null);
    // const [userType, setUserType] = useState('jobseeker');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Handle login logic here
        try{
            await login(email, password);
            setLoading(true);
            navigate('/');
                
        }catch(error){
            console.log(error);
        }
        setLoading(false);
                // Store the token securely (choose one storage method)
               // localStorage.setItem('token', token);
                // sessionStorage.setItem('authToken', token); // Option 2: SessionStorage
               // Cookies.set('authToken', token, { secure: true, sameSite: 'strict' }); // Option 3: Cookies
    }; 

    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="userType" className="block text-sm font-medium text-gray-700">I am a:</label>
                        <select
                            id="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="jobseeker">Job Seeker</option>
                            <option value="employer">Employer</option>
                        </select>
                    </div> */}

                    <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Login
                    </button>
                    <div className="flex">
                    <a href='/forgot-password'>Forgot Password</a>
                    <p>Don&apos;t have an account,</p><a href="/signup">Signup</a>
                    </div>

                </form>
            </div>
            <ToastContainer  />
        </div>
    );
};

export default Login;