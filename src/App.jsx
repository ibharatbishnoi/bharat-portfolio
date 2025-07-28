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

      {/* Hero Section */}
      <section className="px-8 py-20 text-center bg-black">
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-300 mb-4">Hi, I'm Bharat Bishnoi</h1>
        <p className="text-lg text-gray-300 mb-6">Full Stack Developer | Cloud Certified | Tech Enthusiast</p>
        <a
          href="/Bharat_Resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          <FaDownload /> Download Resume
        </a>
      </section>

      {/* About Section */}
      <section className="px-8 py-16 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">About Me</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-7">
          I'm a Computer Science major from VIT Chennai (2021–2025), passionate about building meaningful digital solutions.
          I've developed games, management systems, and AI-powered chatbots, and I'm certified by AWS for both Cloud Practitioner
          and Solutions Architect roles. I also led social media for a cultural club, managing events and growing digital engagement.
        </p>
      </section>

      {/* Education Section */}
      <section className="px-8 py-16 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">Education</h2>
        <div className="max-w-3xl mx-auto text-left bg-gray-800 p-6 rounded-lg shadow mb-6">
          <h3 className="text-xl font-semibold text-white">Vellore Institute of Technology (VIT), Chennai</h3>
          <p className="text-sm text-gray-400">B.Tech in Computer Science and Engineering | 2021 – 2025</p>
          <ul className="list-disc ml-6 text-gray-300 mt-2 space-y-1">
            <li>Current CGPA: 8.6/10</li>
            <li>Relevant Coursework: Data Structures, Web Development, Operating Systems, Cloud Computing</li>
            <li>Activities: Technical Clubs, Hackathons, Cultural Team</li>
          </ul>
        </div>
        <div className="max-w-3xl mx-auto text-left bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-white">Central Academy Senior Secondary School, Jodhpur</h3>
          <p className="text-sm text-gray-400">Senior Secondary (CBSE) | 2020 – 2021</p>
          <ul className="list-disc ml-6 text-gray-300 mt-2 space-y-1">
            <li>Stream: Science (Physics, Chemistry, Math, CS)</li>
            <li>Class 12 Score: 92%</li>
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-8 py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">Experience</h2>
        <div className="max-w-4xl mx-auto grid gap-6 text-left">
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <FaBriefcase /> Full Stack Developer Intern @ Capabl
            </h3>
            <p className="text-sm text-gray-400">Remote · Jun 2023 – Jul 2023</p>
            <ul className="list-disc ml-6 text-gray-300 mt-2 space-y-1">
              <li>Developed an interactive Python Hangman game with dynamic letter input & display.</li>
              <li>Built a Java-based Library Management System improving transaction speed 2x.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <FaBriefcase /> Social Media Head @ Rajasthan Cultural Club
            </h3>
            <p className="text-sm text-gray-400">Chennai, TN · Jun 2022 – Jul 2023</p>
            <ul className="list-disc ml-6 text-gray-300 mt-2 space-y-1">
              <li>Strategized and led social campaigns to increase engagement.</li>
              <li>Organized and promoted cultural events across campus.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-16 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">Projects</h2>
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 text-left">
          {[
            {
              title: "GenoCryptNet",
              description:
                "Secure data transmission using DNA encoding, cryptography, and steganography. Developed custom embedding and decryption pipelines."
            },
            {
              title: "Mental Health Chatbot",
              description:
                "AI-powered chatbot using BERT for real-time mental health support. Integrated NLP preprocessing and response visualization."
            },
            {
              title: "Hangman Game",
              description:
                "Python-based interactive terminal game with letter-guessing logic and random word generation."
            },
            {
              title: "Library Management System",
              description:
                "Java application for managing book catalogs and transactions with high processing speed."
            }
          ].map((proj, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaProjectDiagram /> {proj.title}
              </h3>
              <p className="text-gray-300 mt-2">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-200">
          {[
            { name: "Python", icon: <FaPython className="text-3xl mb-2 text-blue-400" />, level: "Advanced" },
            { name: "Java", icon: <FaJava className="text-3xl mb-2 text-red-400" />, level: "Advanced" },
            { name: "C/C++", icon: <SiCplusplus className="text-3xl mb-2 text-purple-400" />, level: "Intermediate" },
            { name: "HTML/CSS", icon: <FaHtml5 className="text-3xl mb-2 text-orange-500" />, level: "Advanced" },
            { name: "JavaScript", icon: <FaJs className="text-3xl mb-2 text-yellow-300" />, level: "Intermediate" },
            { name: "DSA", icon: <FaCuttlefish className="text-3xl mb-2 text-green-300" />, level: "Advanced" },
            { name: "Problem Solving", icon: <span className="text-3xl mb-2">🤔</span>, level: "Advanced" },
            { name: "Leadership", icon: <span className="text-3xl mb-2">🧠</span>, level: "Strong" }
          ].map(skill => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSkill(skill.name)}
              key={skill.name}
              className="cursor-pointer flex flex-col items-center bg-gray-700 p-4 rounded-xl"
            >
              {skill.icon}
              <p>{skill.name}</p>
              <span className="text-sm text-teal-300">{skill.level}</span>
            </motion.div>
          ))}
        </div>
        {selectedSkill && (
          <div className="mt-8 text-center text-gray-300">
            <h3 className="text-xl font-semibold mb-2">Projects using {selectedSkill}:</h3>
            <ul>
              {skillProjects[selectedSkill]?.length ? (
                skillProjects[selectedSkill].map((project, index) => <li key={index}>{project}</li>)
              ) : (
                <li>No projects listed.</li>
              )}
            </ul>
          </div>
        )}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-teal-300 mb-4">Certifications</h3>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 bg-gray-700 px-4 py-2 rounded-xl">
              <FaCertificate className="text-yellow-400" />
              <span>AWS Certified Cloud Practitioner (2024 – 2027)</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-700 px-4 py-2 rounded-xl">
              <FaCertificate className="text-yellow-400" />
              <span>AWS Certified Solutions Architect - Associate (2024 – 2027)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">Contact</h2>
        <p className="text-gray-300 text-lg mb-2">Email: bishnoibharat9610@gmail.com</p>
        <p className="text-gray-300 text-lg mb-2">Phone: +91 96101 21205</p>
        <p className="text-gray-300 text-lg mb-6">LinkedIn: linkedin.com/in/ibharatbishnoi</p>
        <div className="flex justify-center gap-6 text-2xl text-white">
          <a href="https://github.com/ibharatbishnoi" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-teal-400" />
          </a>
          <a href="https://linkedin.com/in/ibharatbishnoi" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-teal-400" />
          </a>
          <a href="mailto:bishnoibharat9610@gmail.com">
            <FaEnvelope className="hover:text-teal-400" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bharat Bishnoi. All rights reserved.
      </footer>
    </main>
  );
}
