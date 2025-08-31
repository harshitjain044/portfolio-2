import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"; // or use react-icons

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600">
              Feel free to reach out for any role related to me, or web developement projects, or
              just to say hello 👋
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-red-700" />
                <span>harshitjain9908@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-red-700" />
                <span>+91 9034801760</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-red-700" />
                <span>Delhi, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/harshitjain044"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-700 transition"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/harshit-jain044"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-700 transition"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-700 focus:outline-none"
                rows="5"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message Sent Successfully");
              }}
              type="submit"
              className="w-full py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
