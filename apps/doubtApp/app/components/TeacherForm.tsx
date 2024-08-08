import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TeacherForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async () => {
    const data = {
      email,
      password,
      name,
      employeeId,
      department,
    };

    const response = await axios.post(
      "http://localhost:3001/api/teacher/signup",
      data
    );

    if (response.status === 200) {
      router.push("/");
    } else {
      alert("Something went wrong");
    }
  };

  const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className=""> Email Address </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Info@example.com"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
        />
      </div>
      <div>
        <label className=""> Password </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="******"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
        />
      </div>
      <div>
        <label className=""> Full Name </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className=""> Employee ID </label>
          <input
            type="text"
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Employee ID"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
        <div>
          <label className=""> Department </label>
          <input
            type="text"
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="6"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
      </div>

      <div>
        <button
          type="button"
          className="mt-5 w-full rounded-md bg-black p-2 text-center font-semibold text-white"
          onClick={(e) => {
            handleSubmit();
          }}
        >
          Get Started
        </button>
      </div>
      <p className="flex gap-1">
        Already have an account?
        <Link className="text-red-500 underline" href={"/signIn"}>
          SignIn.
        </Link>
      </p>
    </div>
  );
};

export default TeacherForm;
