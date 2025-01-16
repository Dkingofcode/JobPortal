import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const OtpValidation = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const email = localStorage.getItem('email');

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your OTP validation logic here
        localStorage.setItem('code', otp);
        try {
          const response =  await axios.post("http://localhost:5000/api/validateOTP", { email, otp });
          console.log(response);
          if (response.status === 200){
            navigate('/reset-password'); // Redirect to reset password page
            setMessage('OTP is valid. You can reset your password.');
          }
        } catch(error) {
            console.error(error);
          setMessage('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="otp-validation flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">OTP Validation</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">Enter OTP:</label>
                    <input
                        type="text"
                        id="otp"
                        value={otp}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Validate OTP
                </button>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
    );
};

export default OtpValidation;