import React, { useState } from "react";
import { generateResumeSection } from "../services/api"; // Import the function using Hugging Face

const ResumeBuilder = () => {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateSummary = async () => {
    setLoading(true);
    const prompt = `Generate a professional summary for a resume. 
      Name: ${name}.
      Job Title: ${jobTitle}.
      Skills: ${skills}.
      Experience: ${experience}.`;

    const generatedSummary = await generateResumeSection(prompt);
    setSummary(generatedSummary);
    setLoading(false);
  };

  return (
    <div className="resume-builder">
      <h1>AI Resume Builder</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Job Title:
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter your desired job title"
          />
        </label>

        <label>
          Skills:
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="List your key skills"
          />
        </label>

        <label>
          Experience:
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Describe your professional experience"
          />
        </label>
      </form>

      <button onClick={handleGenerateSummary} disabled={loading}>
        {loading ? "Generating..." : "Generate Summary"}
      </button>

      {summary && (
        <div className="resume-section">
          <h2>Generated Resume Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
