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

  // Fetch current location using Geolocation API
  const fetchCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude}, Long: ${longitude}`);
      },
      (error) => {
        console.error("Error fetching location:", error);
        alert("Unable to fetch location. Please try again.");
      }
    );
  };

  const handleSearch = async () => {
    if (!jobTitle && !location) {
      alert("Please enter a job title or location.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/jobs/view?jobTitle=${jobTitle}&location=${location}`
      );
      setResults(response.data.job);
    } catch (error) {
      console.error("Error fetching job results:", error);
      alert("Failed to fetch job results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="hero text-center border border-gray-50 bg-gradient-to-b from-gray-200 to-gray-50 p-10">
        <h1 className="font-bold text-4xl">
          Find your <span className="text-purple-600">new job</span> today
        </h1>
        <p>Thousands of jobs are waiting for you in technology and engineering.</p>

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
            <button
              onClick={fetchCurrentLocation}
              className="bg-purple-600 text-white px-2 py-1 rounded ml-2"
            >
              Use My Location
            </button>
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
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.length > 0 ? (
            results.map((job) => (
              <div
                key={job._id}
                className="bg-white shadow-md rounded-md p-4 border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-700 mb-2">{job.company}</p>
                <p className="text-gray-500 mb-2">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-500 mb-2">
                  <strong>Salary:</strong> ${job.salary}
                </p>
                <button className="bg-purple-600 text-white py-2 px-4 rounded-md mt-2">
                  Apply Now
                </button>
              </div>
            ))
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
