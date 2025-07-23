// import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">Contact Me</h2>

        <div className="space-y-6 text-gray-700 text-lg">
          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-purple-700 text-2xl" />
            <a href="mailto:ajalajohnson27@gmail.com" className="hover:text-purple-500 transition">
              ajalajohnson27@gamil.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-600 text-2xl" />
            <a
              href="https://www.linkedin.com/in/sanusi-oyindamola"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              linkedin.com/in/sanusi-oyindamola
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhone className="text-green-600 text-2xl" />
            <a href="tel:+2347055469687" className="hover:text-green-500 transition">
              +2347055469687
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <FaGithub className="text-black text-2xl" />
            <a
              href="https://github.com/Oyindamola1111"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition"
            >
              github.com/Oyindamola1111
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
  


export default Contact
