"use client";
import React, { useState } from "react";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import GithubIcon from "../../public/github-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(""); // To track errors

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully", data);
        event.target.reset(); // Clear the form fields
        setEmailSubmitted(true);
        setEmailError(""); // Clear any error messages
      } else {
        console.error("Error sending email:", data);
        setEmailError("Failed to send email. Please try again.");
        if (data.error && data.error.statusCode === 429) {
          console.error("Rate limit exceeded. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Error occurred while sending email", error);
      setEmailError("An error occurred while sending the email.");
    }
  };

  return (
    <section className="relative grid gap-4 p-8 py-24 my-12 md:grid-cols-2 md:my-12">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="my-2 ml-8 text-5xl font-bold text-white ">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 ml-8 max-w-md font-semibold text-xl">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2 ml-8 socials ">
          <Link href="https://github.com/Neha5326/js">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="text-green-500">
            <p>Email sent successfully!</p>
            <button
              className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg"
              onClick={() => setEmailSubmitted(false)}
            >
              Send Another Email
            </button>
          </div>
        ) : (
          <form className="flex flex-col p-4 mr-6" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abcd@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            {emailError && (
              <p className="mb-4 text-red-500">{emailError}</p>
            )}
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Email;
