import React from "react";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic

    // Navigate to the next page (Assuming "Form3" is the next page)
    navigate("/form3");
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl mt-5">Add job basics</h2>
        <img src="" alt="" className="mt-3" />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="jobTitle" className="block mb-2">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          placeholder=""
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <h2 className="text-2xl mt-5">Job posting location</h2>
        <br />
        <label htmlFor="locationType" className="block mb-2">
          Which option best describes this job's location? *
        </label>
        <select
          id="locationType"
          name="locationType"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        >
          <option value="On-site">On-site</option>
          <option value="Remote">Remote</option>
        </select>

        <label htmlFor="city" className="block mb-2">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder=""
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <label htmlFor="area" className="block mb-2">
          Area
        </label>
        <input
          type="text"
          id="area"
          name="area"
          placeholder=""
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <label htmlFor="pincode" className="block mb-2">
          Pincode
        </label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          placeholder=""
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <label htmlFor="streetAddress" className="block mb-2">
          Street Address
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder=""
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Form2;
