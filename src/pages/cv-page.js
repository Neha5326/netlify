// pages/cv-page.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CVPage = () => {
  const handleDownload = () => {
    // Show the toast notification
    toast.info("Downloading your CV...", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
      <ToastContainer />
      <a href="/Neha-CV.pdf" download onClick={handleDownload}>
        <button className="px-6 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-105 hover:bg-slate-700">
          Download CV
        </button>
      </a>
      <h1 className="mt-6 text-2xl text-white">Your CV</h1>
      <embed
        src="/Neha-CV.pdf" // Ensure this path is correct
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default CVPage;
