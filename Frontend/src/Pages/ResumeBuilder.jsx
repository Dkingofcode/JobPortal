import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ResumeBuilder = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        skills: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const successToast = () => {
        toast.success('🚀 Resume generated successfully!', 
            {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to an AI service to generate the resume
            successToast();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">AI Resume Builder</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Education:</label>
                        <textarea
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Experience:</label>
                        <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Skills:</label>
                        <textarea
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Generate Resume
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ResumeBuilder;