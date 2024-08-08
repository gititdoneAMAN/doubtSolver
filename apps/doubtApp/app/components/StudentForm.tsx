import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const StudentForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [department, setDepartment] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);

  function handleChecks(e: React.ChangeEvent<HTMLInputElement>) {
    const { checked, name } = e.target;
    if (checked) {
      setSubjects((prev) => [...prev, name]);
    } else {
      setSubjects((prev) => prev.filter((sub) => sub !== name));
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className=""> Email Address </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Info@example.com"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
        />
      </div>
      <div>
        <label className=""> Password </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
        />
      </div>
      <div>
        <label className=""> Full Name </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
        />
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <label className=""> USN </label>
          <input
            onChange={(e) => setUsn(e.target.value)}
            type="text"
            placeholder="USN"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
        <div>
          <label className=""> Department </label>
          <input
            onChange={(e) => setDepartment(e.target.value)}
            type="text"
            placeholder="CSE"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
        <div>
          <label className=""> Semester </label>
          <input
            onChange={(e) => setSemester(e.target.value)}
            type="text"
            placeholder="6"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
        <div>
          <label className=""> Section </label>
          <input
            onChange={(e) => setSection(e.target.value)}
            type="text"
            placeholder="C"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
          />
        </div>
        <div>
          <label className="">Subjects</label>
          <div className="flex gap-4 mt-2">
            <div className="flex gap-1">
              <input
                type="checkbox"
                onChange={handleChecks}
                name="AIML"
                value={"AIML"}
              />
              AIML
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                onChange={handleChecks}
                name="BigData"
                value={"BigData"}
              />
              BigData
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                onChange={handleChecks}
                name="FullStack"
                value={"FullStack"}
              />
              FullStack
            </div>
            <div className="flex gap-1">
              <input
                type="checkbox"
                onChange={handleChecks}
                name="Unix"
                value={"Unix"}
              />
              Unix
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="mt-5 w-full rounded-md bg-black p-2 text-center font-semibold text-white"
          onClick={(e) => {
            router.push("/signIn");
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

export default StudentForm;
