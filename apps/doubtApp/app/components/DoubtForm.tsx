import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";

const DoubtForm = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState("");
  const [teacher, setTeacher] = useState("");
  const [Subject, setSubject] = useState("");
  const [imageLink, setImageLink] = useState("");

  const session = useSession();

  async function postData() {
    const empId = teacherData.find((t) => t?.name === teacher)?.employeeId;
    const response = await axios.post(
      "http://localhost:3001/api/doubt/addDoubt",
      {
        question,
        content,
        teacherConcernedName: teacher,
        studentId: session?.data?.user?.identity,
        Subject,
        empId,
        Department: session.data?.user?.department,
        raisedAt: new Date(),
        studentName: session.data?.user?.name,
        imageUrl: imageLink,
      }
    );
    alert("Doubt raised successfully");
  }
  async function getData() {
    const responseTeacher = await axios.get(
      "http://localhost:3001/api/teacher/getTeachers"
    );
    setTeacherData(responseTeacher.data.returnObject);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      {/* {JSON.stringify(session?.data?.user?.department)} */}
      <h1 className="text-3xl font-semibold mb-2.5">Ask Doubt</h1>
      <div>
        <label className="">Question</label>
        <input
          type="email"
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="What is your doubt?"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
        />
      </div>
      <div>
        <label className="">Content</label>
        <textarea
          name="content"
          id="content"
          onChange={(e) => setContent(e.target.value)}
          className="mt-2 h-40 w-full rounded-md bg-gray-100 p-3"
          placeholder="Write your doubt here...."
        ></textarea>
      </div>
      <div>
        <label className="">Subject</label>
        <input
          type="subject"
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="teacher">Teacher to ask</label>
        <select
          onChange={(e) => setTeacher(e.target.value)}
          name="role"
          id="role"
          className="p-2 rounded bg-gray-100"
        >
          <option value="">Select</option>
          {teacherData?.map((teacher: any, index: number) => (
            <option key={teacher.id} value={teacher.name}>
              {teacher.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full p-4 bg-gray-100">
        <ImageUpload setImageLink={setImageLink} />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            postData();
            alert("Doubt raised successfully");
          }}
          className="mt-5 w-full rounded-md bg-black p-2 text-center font-semibold text-white"
        >
          ASK
        </button>
      </div>
    </div>
  );
};

export default DoubtForm;
