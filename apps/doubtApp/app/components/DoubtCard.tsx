import { useRouter } from "next/navigation";
import React from "react";

const DoubtCard = ({
  doubt,
  setReadDoubt,
  setDisplay,
}: {
  doubt: any;
  setReadDoubt: any;
  setDisplay: any;
}) => {
  return (
    <div
      onClick={() => {
        setReadDoubt(doubt);
        setDisplay(false);
        alert(doubt.id);
      }}
      className="w-full cursor-pointer bg-white flex justify-between items-center p-3"
    >
      <div>
        <p className="flex gap-1 text-md">
          <span className="text-red-500">{doubt.Subject}</span>
        </p>
        <h1 className="text-3xl font-semibold">{doubt.question}</h1>
        <p className="flex gap-1 text-sm mt-1 text-gray-400">
          <span>{doubt.studentName}</span>
          <span>{doubt.studentId}</span>
        </p>
      </div>
      <div
        className={`${doubt.Status === "Pending" ? "bg-red-500" : "bg-green-500"}  rounded-full p-1 h-5 w-5`}
      ></div>
    </div>
  );
};

export default DoubtCard;
