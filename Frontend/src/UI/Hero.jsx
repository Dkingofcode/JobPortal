import React, { useState } from 'react';
import axios from 'axios';
import searchIcon from "../assets/MagnifyingGlass.png";
import locationIcon from "../assets/MapPinLine.png";
import Group1 from "../assets/Group 6265.png";
import Group2 from "../assets/Group 48096257.png";
import Group3 from "../assets/Group 48096258.png";

const Hero = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!jobTitle && !location) {
      alert("Please enter a job title or location.");
      return;
    }

    setLoading(true);

    try {
      // Adjust the API URL based on your backend endpoint
      const response = await axios.get('/api/jobs', {
        params: {
          title: jobTitle,
          location: location,
        },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching job results:", error);
      alert("Failed to fetch job results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="hero text-center align-middle border border-gray-50 bg-gradient-to-b from-gray-200 to-gray-50 p-10">
        <h1 className="font-bold text-lg text-4xl text-middle">
          Find your <span className="text-purple-600">new job</span> today
        </h1>
        <p>
          Thousands of jobs in the computer, engineering and technology sectors are waiting for you
        </p>

        <div className="search-box flex items-center justify-center gap-4 mt-4">
          {/* Job Title Input */}
          <div className="border bg-slate-50 border-gray-400 flex items-center p-2 rounded-md">
            <img src={searchIcon} alt="Search icon" className="mr-2" />
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="What position are you looking for?"
              className="outline-none bg-transparent flex-grow"
            />
          </div>

          {/* Location Input */}
          <div className="border bg-slate-50 border-gray-400 flex items-center p-2 rounded-md">
            <img src={locationIcon} alt="Location icon" className="mr-2" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="outline-none bg-transparent flex-grow"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="p-2 bg-purple-600 text-white rounded-md"
          >
            Search
          </button>
        </div>

        {/* Loading Indicator */}
        {loading && <p className="mt-4">Searching for jobs...</p>}

        {/* Search Results */}
        <div className="mt-8">
          {results.length > 0 ? (
            <ul>
              {results.map((job) => (
                <li
                  key={job._id}
                  className="border border-gray-300 p-4 rounded-md mb-2"
                >
                  <h3 className="text-lg font-bold">{job.title}</h3>
                  <p>{job.company}</p>
                  <p>{job.location}</p>
                  <p>Salary: ${job.salary}</p>
                </li>
              ))}
            </ul>
          ) : (
            !loading && <p>No jobs found. Try adjusting your search.</p>
          )}
        </div>

        {/* Hero Images */}
        <div className="HeroImages relative mt-8">
          <img src={Group1} className="z-10" alt="Hero background graffiti" />
          <img className="bg-gray-50" src={Group2} alt="Hero background graffiti" />
          <img className="absolute top-0 z-10" src={Group3} alt="Image Poster" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
