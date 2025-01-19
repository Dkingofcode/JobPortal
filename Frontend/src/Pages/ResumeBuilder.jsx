import React, { useState } from 'react';

const ResumeBuilder = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        skills: '',
    });
    const [generatedResume, setGeneratedResume] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://your-backend-url.com/api/generate-resume', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setGeneratedResume(data.resume);
            setLoading(false);
        } catch (error) {
            console.error('Error generating resume:', error);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">AI Resume Builder</h1>
                <form onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    {Object.keys(formData).map((field) => (
                        <div className="mb-4" key={field}>
                            <label className="block text-gray-700 capitalize">
                                {field}:
                            </label>
                            <textarea
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 rounded-lg ${
                            loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
                        } text-white`}
                    >
                        {loading ? 'Generating...' : 'Generate Resume'}
                    </button>
                </form>

                {/* Display Generated Resume */}
                {generatedResume && (
                    <div className="mt-6">
                        <h2 className="text-lg font-bold">Generated Resume:</h2>
                        <div className="bg-gray-100 p-4 rounded-lg mt-2">
                            <pre className="whitespace-pre-wrap">{generatedResume}</pre>
                        </div>
                        <button
                            onClick={() => {
                                const blob = new Blob([generatedResume], {
                                    type: 'text/plain;charset=utf-8',
                                });
                                const link = document.createElement('a');
                                link.href = URL.createObjectURL(blob);
                                link.download = 'resume.txt';
                                link.click();
                            }}
                            className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                        >
                            Download Resume
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResumeBuilder;
