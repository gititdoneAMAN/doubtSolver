"use client";
import React, { useState } from "react";

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e?.target?.files[0]);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      setMessage("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("files", file);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const response = await fetch("/api/profile/cv", requestOptions);
      const result = await response.json();
      if (result.status === "success") {
        setMessage("File uploaded successfully!");
      } else {
        setMessage(`Failed to upload file: ${result.data}`);
      }
    } catch (error) {
      setMessage("Error occurred during file upload");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    uploadFile();
  };

  return (
    <div>
      <h1>Upload your file</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadPage;
