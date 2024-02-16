import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic

    // Navigate to the next page (Assuming "Form3" is the next page)
    navigate("/form2");
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl mt-5">Create an Employer Account</h2>
        <img src="" alt="" className="mt-3" />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName" className="block mb-2">
          Your company's name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder=""
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        <label htmlFor="employeeCount" className="block mb-2">
          Your company's number of employees
        </label>
        <select
          id="employeeCount"
          name="employeeCount"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        >
          <option value="">Select an option</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-100">51-100 employees</option>
          <option value="101+">101 or more employees</option>
        </select>

        <label htmlFor="fullName" className="block mb-2">
          Your first and last name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder=""
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        <label htmlFor="howYouHeard" className="block mb-2">
          How you heard about us
        </label>
        <input
          type="text"
          id="howYouHeard"
          name="howYouHeard"
          placeholder=""
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        <label htmlFor="phoneNumber" className="block mb-2">
          Your phone number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
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

export default Form;
