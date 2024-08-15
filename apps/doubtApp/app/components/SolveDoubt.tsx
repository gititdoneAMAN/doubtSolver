"use client";
import axios from "axios";
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

const SolveDoubt = ({ readDoubt }: any) => {
  const [imageLink, setImageLink] = useState("");
  async function handleSubmit() {
    const response = await axios.post(
      "http://localhost:3001/api/doubt/resolveDoubt",
      {
        id: readDoubt.id,
        teacherResponse: teacherResponse,
        studentId: readDoubt.studentId,
        empId: readDoubt.empId,
        teacherImgUrl: imageLink,
      }
    );
    alert("Doubt solved successfully");
  }

  const [teacherResponse, setTeacherResponse] = useState("");
  return (
    <div className="bg-white text-black p-5">
      {/* <h1 className="text-4xl font-semibold">Doubt</h1> */}
      <div className="flex gap-1 mb-4 text-sm text-red-600">
        <span>{readDoubt.studentName}</span>
        {/* <span>{readDoubt.studentId}</span> */}
        <span>{readDoubt.Department}</span>
      </div>
      <div className="my-2 bg-gray-100 p-2">
        <h2 className="text-3xl font-bold flex flex-col">
          <span className="text-red-500 font-semibold text-xl">Question</span>
          {readDoubt.question}
        </h2>
      </div>
      <div className="my-2 bg-gray-100 p-2">
        <h2 className="text-2xl flex flex-col ">
          <span className="text-red-500 font-semibold text-xl">Content</span>
          {readDoubt.content}
        </h2>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-red-600 font-semibold">
          Doubt related Image
        </label>
        {readDoubt.imageUrl ? (
          <img
            src={readDoubt.imageUrl}
            alt="image"
            className="w-full  bg-gray-100 px-3 pb-3 pt-2 text-3xl"
          />
        ) : (
          "No image uploaded by the student"
        )}
      </div>
      <div className="my-1">
        <label className="text-lg text-red-600 font-semibold">
          Teacher's Response
        </label>
        <textarea
          onChange={(e) => setTeacherResponse(e.target.value)}
          name="Tresponse"
          id="tresponse"
          placeholder="Response from the teacher"
          className="w-full h-32 bg-gray-100 px-3 pb-3 pt-2"
        ></textarea>
      </div>
      <div className="w-full p-4 bg-gray-100">
        <ImageUpload setImageLink={setImageLink} />
      </div>
      <div className="my-2">
        <button
          className="bg-black w-full text-white px-3 py-2 "
          onClick={() => {
            handleSubmit();
            alert(readDoubt.id);
          }}
        >
          Resolve
        </button>
      </div>
    </div>
  );
};

export default SolveDoubt;
