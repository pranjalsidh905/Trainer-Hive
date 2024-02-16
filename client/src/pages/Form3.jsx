import React, { useState } from "react";
// import "../../styles/tailwind.css"; // Import your Tailwind CSS styles

const Form3 = (props) => {
  const jobTypes = [
    "Select job type",
    "Full-time",
    "Permanent",
    "Fresher",
    "Part-time",
    "Internship",
    "Temporary",
    "Freelance",
    "Volunteer",
  ];

  const [selectedJobType, setSelectedJobType] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedJobType(value);
    props.onJobTypeChange(value);
  };

  return (
    <div className="job-type p-4 bg-white rounded-md shadow-md">
      <h1 className="text-lg font-bold text-blue-600 mb-4">Select Job Type*</h1>
      <div className="options space-y-2">
        {jobTypes.map((jobType) => (
          <div className="flex items-center" key={jobType}>
            <input
              type="radio"
              id={jobType}
              name="job-type"
              value={jobType}
              checked={selectedJobType === jobType}
              onChange={handleChange}
              className="mr-2 text-blue-500 focus:ring-blue-500"
            />
            <label
              htmlFor={jobType}
              className="cursor-pointer text-gray-800"
            >
              {jobType}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form3;

