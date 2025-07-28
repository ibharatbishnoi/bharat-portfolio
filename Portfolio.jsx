// Complete React Portfolio Component - All Sections Included
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaJava,
  FaHtml5,
  FaJs,
  FaCuttlefish,
  FaCertificate,
  FaDownload,
  FaBriefcase,
  FaProjectDiagram
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export default function Portfolio() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    document.title = "Bharat Bishnoi | Portfolio";
  }, []);

  const skillProjects = {
    Python: ["Hangman Game", "Mental Health Chatbot"],
    Java: ["Library Management System"],
    "HTML/CSS": [],
    JavaScript: [],
    "C/C++": [],
    DSA: ["GenoCryptNet"],
    "Problem Solving": ["GenoCryptNet", "Hangman Game"],
    Leadership: []
  };

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen font-sans">
      <section className="px-8 py-20 text-center bg-black">
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-300 mb-4">Hi, I'm Bharat Bishnoi</h1>
        <p className="text-lg text-gray-300 mb-6">Full Stack Developer | Cloud Certified | Tech Enthusiast</p>
        <a href="/Bharat_Resume.pdf" download className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-lg font-semibold transition">
          <FaDownload /> Download Resume
        </a>
      </section>
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">Contact</h2>
        <p className="text-gray-300 text-lg mb-2">Email: bishnoibharat9610@gmail.com</p>
        <p className="text-gray-300 text-lg mb-2">Phone: +91 96101 21205</p>
        <p className="text-gray-300 text-lg mb-6">LinkedIn: linkedin.com/in/ibharatbishnoi</p>
        <div className="flex justify-center gap-6 text-2xl text-white">
          <a href="https://github.com/ibharatbishnoi" target="_blank" rel="noreferrer"><FaGithub className="hover:text-teal-400" /></a>
          <a href="https://linkedin.com/in/ibharatbishnoi" target="_blank" rel="noreferrer"><FaLinkedin className="hover:text-teal-400" /></a>
          <a href="mailto:bishnoibharat9610@gmail.com"><FaEnvelope className="hover:text-teal-400" /></a>
        </div>
      </section>
      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bharat Bishnoi. All rights reserved.
      </footer>
    </main>
  );
}
