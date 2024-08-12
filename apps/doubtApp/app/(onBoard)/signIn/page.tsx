"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const session = useSession();

  if (session.status === "authenticated") {
    router.push("/feed");
  }

  return (
    <div className=" w-full flex justify-center items-center">
      <div className="w-2/5 bg-white rounded p-10 flex flex-col gap-5">
        <h1 className="text-3xl mb-2.5 font-bold">Login</h1>
        <div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="flex gap-1 flex-col">
              Email
              <input
                type="text"
                name="email"
                id="email"
                placeholder="aman@gmail.com"
                className="px-2 py-2 rounded text-md  bg-[#F3F4F6]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password" className="flex gap-1 flex-col">
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                className="px-2 py-2 rounded text-md  bg-[#F3F4F6]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label htmlFor="role" className="flex gap-1 flex-col">
              Role
              <select
                name="role"
                id="role"
                className="p-2 rounded bg-[#F3F4F6]"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </label>
            <button
              onClick={async () => {
                await signIn("credentials", {
                  email,
                  password,
                  role,
                });
                router.push("/");
              }}
              className="text-center rounded mt-2 w-full p-2 bg-black text-white"
            >
              Login
            </button>
            <p className="flex gap-1">
              Don't have an account?{" "}
              <Link className="text-red-500 underline" href={"/signUp"}>
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
