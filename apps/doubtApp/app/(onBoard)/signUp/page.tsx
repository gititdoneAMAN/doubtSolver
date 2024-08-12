"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import StudentForm from "../../components/StudentForm";
import TeacherForm from "../../components/TeacherForm";
import { useSession } from "next-auth/react";

const page = () => {
  const [role, setRole] = useState("");

  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") {
    router.push("/feed");
  }
  return (
    <>
      <div className="lg:m-10">
        <div className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
          <h1 className="mb-6 text-xl font-bold lg:text-3xl">Register</h1>
          <div>
            <label className="text-lg mb-2 font-semibold">Role</label>
            <div className="flex gap-10 mb-2">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="role"
                  id="student"
                  value={"student"}
                  onChange={(e) => setRole("student")}
                />
                <label htmlFor="student">Student</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="role"
                  id="student"
                  value={"teacher"}
                  onChange={(e) => setRole("teacher")}
                />
                <label htmlFor="teacher">Teacher</label>
              </div>
            </div>
            {role === "student" ? (
              <StudentForm />
            ) : role === "teacher" ? (
              <TeacherForm />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
