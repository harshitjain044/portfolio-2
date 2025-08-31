import { motion } from "framer-motion";
import heroImg from "../assets/image-2.jpg"; // replace with your image

export default function Home() {
  return (
    <section className="flex-1 flex items-center justify-center min-h-[] bg-gradient-to-r from-gray-50 to-white">
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        
        {/* Left Side - Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Hi, I’m <span className="text-red-700">Harshit Jain</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            A passionate <span className="font-semibold">Frontend Developer</span> exploring
            full-stack development. I love building clean, modern, and scalable
            web applications that provide smooth user experiences.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-red-700 text-white rounded-2xl shadow-lg hover:bg-red-800 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-red-700 text-red-700 rounded-2xl hover:bg-red-700 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0"
        >
          <img
            src={heroImg}
            alt="Harshit Jain"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl object-cover border-4 border-red-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
