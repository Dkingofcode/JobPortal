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
import Profile from './components/JobSeeker/Profile';
import Home from './Pages/Home';
import PostJob from './components/Employer/PostJob';
import Jobs from './Pages/Jobs';
import Signup from './components/Auth/Signup';
//import { createBrowserHistory } from 'history';


function App() {
  const [count, setCount] = useState(0)
  const [userType, setUserType] = useState(null);

  // const handleUserTypeChange = (type) => {
  //   setUserType(type);
  // };
  
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
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post-jobs" element={<PostJob />} />
              <Route path="/jobs" element={<Jobs />} />
           </Routes>
           
           <Footer />
    
      </div>
    </Router>
  )
}

export default App
