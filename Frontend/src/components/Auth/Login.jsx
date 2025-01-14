import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('jobseeker');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ email, password, userType });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userType">I am a:</label>
                    <select
                        id="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value="jobseeker">Job Seeker</option>
                        <option value="employer">Employer</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;