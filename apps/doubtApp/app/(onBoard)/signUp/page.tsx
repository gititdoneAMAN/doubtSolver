"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <>
      <div className="lg:m-10">
        <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
          <h1 className="mb-6 text-xl font-bold lg:text-3xl">Register</h1>
          <div>
            <label className=""> Email Address </label>
            <input
              type="email"
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Password </label>
            <input
              type="password"
              placeholder="******"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Full Name </label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className=""> USN </label>
              <input
                type="text"
                placeholder="University Serial Number"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label className=""> Semester </label>
              <input
                type="text"
                placeholder="6"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label className=""> Section </label>
              <input
                type="text"
                placeholder="C"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label className="">Subjects</label>
              <div className="flex gap-4 mt-2">
                <div className="flex gap-1">
                  <input type="checkbox" name="subject" value={"AIML"} />
                  AIML
                </div>
                <div className="flex gap-1">
                  <input type="checkbox" name="subject" value={"BigData"} />
                  BigData
                </div>
                <div className="flex gap-1">
                  <input type="checkbox" name="subject" value={"FullStack"} />
                  FullStack
                </div>
                <div className="flex gap-1">
                  <input type="checkbox" name="subject" value={"Unix"} />
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
                e.preventDefault();
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
        </form>
      </div>
    </>
  );
};

export default page;
