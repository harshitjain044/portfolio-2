import React from "react";
import { Briefcase } from "lucide-react"; // or use react-icons if you prefer

const experiences = [
  {
    role: "Generative AI Internship Program",
    company: "CSRBOX, New Delhi",
    duration: "July 2024 – Aug 2025",
    description:
      "Completed a certified 2-month internship in Generative AI. Learned to build LLM-based applications and worked on a final team chatbot project.",
  },
  {
    role: "Full Stack Web Development Course",
    company: "Angela Yu - Udemy",
    duration: "july 2025 - Sept 2025",
    description:
      "Completed an extensive MERN stack course covering end-to-end web development. Built real-world projects and mastered both frontend and backend skills.",
  },
  {
    role: "Hackathon Participation",
    company: "Hacknovate 6.0, Vihaan 8.0, Hackwave X25",
    duration: "Feb 2025 – Apr 2025",
    description:
      "Actively participated in multiple national-level hackathons. Collaborated with cross-functional teams to brainstorm and develop innovative tech-based solutions under tight deadlines. Gained real-world exposure to teamwork, ideation, and rapid development.",
  },

];

export default function Experience() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="max-w-5xl mx-auto px-6 overflow-y-scroll max-h-[60vh]">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-red-700 pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Dot Icon */}
              <div className="absolute -left-8 top-2 w-6 h-6 bg-red-700 rounded-full flex items-center justify-center shadow-md">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </div>

              {/* Content */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold">
                  {exp.role}{" "}
                  <span className="text-red-700">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
