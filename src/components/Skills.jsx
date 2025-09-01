import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";


const frontendSkills = [{ name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
{ name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
{ name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
{ name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
{ name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },

]
const backendSkills = [{ name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
{ name: "Express.js", icon: <SiExpress className="text-gray-700 text-5xl" /> },
{ name: "API Development", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
];
const databaseSkills = [{ name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
{ name: "SQL", icon: <FaDatabase className="text-indigo-600 text-5xl" /> },]


const otherSkills = [  { name: "Git & GitHub", icon: <FaGithub className="text-black text-5xl" /> },
{ name: "redux", icon: <FaReact className="text-blue-500 text-5xl" /> }
];

export default function Skills() {
  return (
    <section className=" flex items-center justify-center bg-gradient-to-r from-gray-50 to-white px-8">
      <div className="max-w-6xl mt-5 mx-auto text-center overflow-y-auto max-h-[65vh]  py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">My Skills</h2>
        <div className="space-y-10">
          <h1 className="text-2xl font-semibold text-red-700">Frontend</h1>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-semibold text-red-700">Backend</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>

         <h1 className="text-2xl font-semibold text-red-700">Database</h1>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {databaseSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-semibold text-red-700">Other Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {otherSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}
