import React from "react";

const DoubtForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className="">Question</label>
        <input
          type="email"
          placeholder="What is your doubt?"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
        />
      </div>
      <div>
        <label className="">Content</label>
        <textarea
          name="content"
          id="content"
          className="mt-2 h-40 w-full rounded-md bg-gray-100 p-3"
          placeholder="Write your doubt here...."
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label htmlFor="teacher">Teacher to ask</label>
        <select name="role" id="role" className="p-2 rounded bg-gray-100">
          <option value="">Select</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>

      <div>
        <button
          type="button"
          className="mt-5 w-full rounded-md bg-black p-2 text-center font-semibold text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default DoubtForm;
