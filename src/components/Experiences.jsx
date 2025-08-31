import React from "react";
import { Briefcase } from "lucide-react"; // or use react-icons if you prefer

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Tech Solutions Pvt Ltd",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Worked on building responsive UIs using React, TailwindCSS, and integrated REST APIs for dynamic data.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self Employed",
    duration: "2023 - Present",
    description:
      "Developed custom websites for small businesses, focusing on modern design, performance, and SEO optimization.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "2022 - Present",
    description:
      "Contributed to open-source React libraries, fixed bugs, and added documentation to improve community projects.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "2022 - Present",
    description:
      "Contributed to open-source React libraries, fixed bugs, and added documentation to improve community projects.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "2022 - Present",
    description:
      "Contributed to open-source React libraries, fixed bugs, and added documentation to improve community projects.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "2022 - Present",
    description:
      "Contributed to open-source React libraries, fixed bugs, and added documentation to improve community projects.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "2022 - Present",
    description:
      "Contributed to open-source React libraries, fixed bugs, and added documentation to improve community projects.",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Projects",
    duration: "2022 - Present",
    description:
      "Contributed to open-source React libraries, fixed bugs, and added documentation to improve community projects.",
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
