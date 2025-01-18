import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


// 678b1e9df74b33ce6be63b7d
// 678a803166ae91ef551bbb54

const JobApplication = () => {
    const location = useLocation();
    const navigate  = useNavigate();
    const { jobTitle, companyName } = location.state;
    console.log(jobTitle);
    console.log(companyName);

    

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: '',
        coverLetter: ''
    });

     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
     }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
         try{

             const response  = await(`http://localhost:5000/api/application/apply/678b1e9df74b33ce6be63b7d`, formData.email, formData.name, formData.cover, formData.resume)
             if(response){
                console.log(response);
                 console.log('Form submitted');
                 alert("Application submitted sucessfully");
                 navigate("/jobs");
                }
            }catch(error){
                console.error(error);
            }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Apply for {jobTitle}</h1>
                <h2 className="text-xl mb-6">Company: {companyName}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name:</label>
                        <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" required className="mt-1 p-2 w-full border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} name="email" required className="mt-1 p-2 w-full border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="resume" className="block text-gray-700">Resume:</label>
                        <input type="file" id="resume" value={formData.resume} onChange={handleChange} name="resume" required className="mt-1 p-2 w-full border rounded" />
                    </div>

                    <div>
                    <label htmlFor="coverLetter" className="block text-gray-700">Cover Letter:</label>
            <textarea required id='coverLetter' name='coverLetter' value={formData.coverLetter} onChange={handleChange}  className="border p-2 rounded w-full" rows="5"></textarea>
        </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit Application</button>
                </form>
            </div>
        </div>
    );
};

export default JobApplication;