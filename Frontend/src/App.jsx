import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import AuthComponent from './components/Auth';
//import Employer from './components/Employer';
//import JobSeeker from './components/JobSeeker';
import Header from './UI/Header';
import Footer from './UI/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import PostJob from './Pages/CreateJob';
import Jobs from './Pages/JobsPage';
import Signup from './components/Auth/Signup';
import Login from "./components/Auth/Login";
import ForgotPassword from "./components/Auth/ForgotPassword";
//import { createBrowserHistory } from 'history';
import { Navigate } from 'react-router-dom';
import OtpValidation from './components/Auth/OtpValidation';
import ResetPassword from "./components/Auth/ResetPassword";
import CreateCompany from './Pages/Createcompany';
import JobApplication from "./Pages/JobApplication";


function App() {
  //const [count, setCount] = useState(0);
  //const [userType, setUserType] = useState(null);

  // const handleUserTypeChange = (type) => {
  //   setUserType(type);
  // };

  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
  }

  const PasswordValidation = ({ children }) => {
    const code = localStorage.getItem('code');
    return code ? children : <Navigate to="/OTPValidation" />;
  }
  



  return (
    <Router>
      <div>        
            <>
              {/* <div>
                <AuthComponent onUserTypeChange={handleUserTypeChange} />
                {userType === 'employer' && <Employer />}
                {userType === 'jobseeker' && <JobSeeker />}
              </div> */}
            </>

           <Header />
           <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/OTPValidation" element={<OtpValidation />} />
              <Route path="/reset-password" element={<PasswordValidation><ResetPassword /></PasswordValidation>} />
              <Route path="/" element={<PrivateRoute  ><Home /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/post-job" element={<PrivateRoute><PostJob /></PrivateRoute>} />
              <Route path="/jobs" element={<PrivateRoute><Jobs /></PrivateRoute>} />
              <Route path="/jobs/:jobId/apply" element={<PrivateRoute><JobApplication /></PrivateRoute>} />
              <Route path="/company" element={<PrivateRoute><CreateCompany /></PrivateRoute>} />

           </Routes>
           
           <Footer />
    
      </div>
    </Router>
  )
}

export default App;
