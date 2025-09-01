import { motion } from "framer-motion";

const projects = [
  {
    title: "Movies Finder App",
    description:"Responsive React app using TMDB API to search movies, view details, and manage favorites with dark/light mode and dynamic routing.",
    tech: ["React","Tailwindcss", "API", "Router"],
    github: "https://github.com/harshitjain044/Movie_finder",
    live : "https://moviesearch044.netlify.app"
  },
  {
    title: "Todo Manager App",
    description: "A full-featured todo manager with add, edit, delete, and complete functionality. Built with React, Tailwind, and LocalStorage .",
    tech: ["React", "Tailwindcss", "Framer Motion", "LocalStorage"],
    github: "https://github.com/harshitjain044/Todo",
    live : "https://tod0-site.netlify.app"
  },
  {
    title: "Spotify Clone",
    description: "A Spotify web app clone with user authentication, music playback, and playlist management using React, Tailwind, and Spotify API.",
    tech: ["React", "Tailwindcss", "Spotify API", "Nodejs", "Express"],
    github: "https://github.com/harshitjain044/Spotify_Clone",
    live : "https://spotifycloneharshit.netlify.app"
  },
  {
    title: "Task assigning web app ",
    description: "Task management web app with user authentication, CRUD operations, and REST APIs for seamless task assignment and tracking.",
    tech: ["React", "Tailwind", "Router", "Nodejs", "Express", "MongoDB", "JWT"],
    github: "https://github.com/yourusername/portfolio",
    live : "https://yourportfolio.com"
  },

  // 👉 Add as many more as you want, will scroll instead of stretching
];

export default function Projects() {
  return (
    <section className="  flex items-center justify-center bg-gradient-to-r from-gray-50 to-white px-8 py-12">
      <div className="max-w-6xl w-full overflow-y-auto max-h-[65vh] ">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          My <span className="text-red-700">Projects</span>
        </h2>

        {/* 👇 SCROLLABLE GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3  pr-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 rounded-full border border-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gray-800 cursor-pointer text-white rounded-xl hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-red-700 cursor-pointer text-white rounded-xl hover:bg-red-800 transition"
                >
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
