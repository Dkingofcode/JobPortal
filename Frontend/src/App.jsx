import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import AuthComponent from './components/Auth';
//import Employer from './components/Employer';
//import JobSeeker from './components/JobSeeker';
import Header from './UI/Header';

function App() {
  const [count, setCount] = useState(0)
  const [userType, setUserType] = useState(null);

  // const handleUserTypeChange = (type) => {
  //   setUserType(type);
  // };
  
  return (
    <>
      <div>        
            <>
              {/* <div>
                <AuthComponent onUserTypeChange={handleUserTypeChange} />
                {userType === 'employer' && <Employer />}
                {userType === 'jobseeker' && <JobSeeker />}
              </div> */}
            </>

           <Header />
      
      </div>
    </>
  )
}

export default App
