"use client";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagramSquare   } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";


import profilePicture from "../public/p2.png"
import universityLogo from "../public/univesity_logo.png"
import schoolLogo from "../public/school_logo.png"
import projectOne from "../public/pr1.png"
import projectTwo from "../public/pr2.png"
import projectThree from "../public/pr3.png"
import projectFour from "../public/pr4.png"

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
})

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
  <main className={`${poppinsFont.className} min-h-screen p-0 md:px-0 lg:px-0 ${darkMode ? 'dark bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 text-gray-900'} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      {/* Navigation Bar */}
      <nav className={`flex justify-between items-center px-8 py-6 shadow-sm sticky top-0 z-10 ${darkMode ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'}`}>
  <div className="flex items-center gap-2 sm:gap-3">
          <Image src={profilePicture} alt="Logo" width={40} height={40} className={`rounded-full border ${darkMode ? 'border-gray-700' : 'border-yellow-300'}`} />
          <span className="font-bold text-xl tracking-wide">Hiruna Wijesinghe</span>
        </div>
        <button className="sm:hidden text-2xl p-2 rounded focus:outline-none" onClick={() => setNavOpen(!navOpen)} aria-label="Open navigation menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className={`flex-col sm:flex-row flex items-center gap-4 sm:gap-8 font-medium flex-wrap sm:flex ${navOpen ? 'flex' : 'hidden'} sm:!flex absolute sm:static top-16 left-0 w-full sm:w-auto bg-white dark:bg-gray-900 sm:bg-transparent sm:dark:bg-transparent shadow-md sm:shadow-none z-20 p-4 sm:p-0 transition-all duration-300`}>
          <li><a href="#projects" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#education" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition">Education</a></li>
          <li><a href="/Resume-template.doc.pdf" target="_blank" className="bg-yellow-400 text-white py-2 px-4 rounded shadow hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400 transition">Resume</a></li>
          <li>
            <button
              aria-label="Toggle Dark Mode"
              className="ml-4 text-2xl p-2 rounded-full border dark:border-gray-700 border-yellow-300 bg-transparent hover:bg-yellow-100 dark:hover:bg-gray-800 transition"
              onClick={() => setDarkMode(!darkMode)}
            >
              <BsFillMoonStarsFill className={darkMode ? 'text-yellow-300' : 'text-gray-700'} />
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10 bg-gradient-to-r from-yellow-100 via-white to-yellow-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Hi, I'm <span className="text-yellow-500">Hiruna</span></h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Software Engineer & Full Stack Developer</h2>
          <p className="max-w-lg text-lg mb-6">Bachelor of Software Engineering undergraduate at The Open University of Sri Lanka. I specialize in building modern web, mobile, and desktop applications.</p>
          <div className="flex gap-4 justify-center md:justify-start mb-6">
            <a href="https://github.com/hirunch" target="_blank" className="hover:text-yellow-500 text-3xl"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hiruna-wijesinghe/" target="_blank" className="hover:text-yellow-500 text-3xl"><FaLinkedin /></a>
            <a href="https://x.com/" target="_blank" className="hover:text-yellow-500 text-3xl"><FaSquareXTwitter /></a>
            <a href="https://www.instagram.com/hiruncw/" target="_blank" className="hover:text-yellow-500 text-3xl"><FaInstagramSquare /></a>
          </div>
          <a href="#contact" className="inline-block bg-yellow-400 text-white py-2 px-6 rounded shadow hover:bg-yellow-500 transition font-semibold">Contact Me</a>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg bg-gradient-to-b from-yellow-300 to-yellow-100 flex items-center justify-center">
            <Image src={profilePicture} alt="Profile" layout="fill" objectFit="cover" className="rounded-full" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
  <section id="skills" className="px-8 py-16 bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="mb-4 text-4xl text-yellow-500">
              <i className="devicon-react-original"></i>
              <i className="devicon-nextjs-original"></i>
              <i className="devicon-tailwindcss-plain"></i>
            </div>
            <span className="text-xl font-semibold mb-2">Web Development</span>
            <span className="text-gray-700 dark:text-gray-200">React, Next.js, Tailwind CSS</span>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="mb-4 text-4xl text-yellow-500">
              <i className="devicon-flutter-plain"></i>
              <i className="devicon-android-plain"></i>
            </div>
            <span className="text-xl font-semibold mb-2">Mobile Apps</span>
            <span className="text-gray-700 dark:text-gray-200">Flutter, Android</span>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="mb-4 text-4xl text-yellow-500">
              <i className="devicon-nodejs-plain"></i>
              <i className="devicon-dot-net-plain"></i>
            </div>
            <span className="text-xl font-semibold mb-2">Backend</span>
            <span className="text-gray-700 dark:text-gray-200">Node.js, .NET</span>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="mb-4 text-4xl text-yellow-500">
              <i className="devicon-figma-plain"></i>
              <i className="devicon-photoshop-plain"></i>
            </div>
            <span className="text-xl font-semibold mb-2">UI/UX Design</span>
            <span className="text-gray-700 dark:text-gray-200">Figma, Photoshop</span>
          </div>
        </div>
      </section>

      {/* Education Section */}
  <section id="education" className="px-8 py-16 bg-gradient-to-r from-yellow-50 via-white to-yellow-100 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto place-items-center w-fit">
      <div className="bg-white dark:bg-gray-800 max-w-xs h-96 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-yellow-300 dark:border-yellow-400">
          <div className="mb-4">
            <Image src={universityLogo} alt="University Logo" width={60} height={60} className="rounded-full shadow" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-yellow-600 dark:text-yellow-300">The Open University of Sri Lanka</h3>
          <span className="inline-block bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100 px-3 py-1 rounded-full text-sm font-semibold mb-2">BSc (Hons) Software Engineering</span>
          <span className="inline-block bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 px-2 py-1 rounded text-xs mb-2">Year 2 Completed</span>
          <p className="text-gray-700 dark:text-gray-200 text-center">Bachelor of Software Engineering undergraduate, focusing on modern software and web development.</p>
        </div>
  <div className="bg-white dark:bg-gray-800 max-w-xs h-96 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-yellow-300 dark:border-yellow-400">
          <div className="mb-4">
          <Image src={schoolLogo} alt="School Logo" width={50} height={50} className="rounded-full shadow" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-yellow-600 dark:text-yellow-300">Dharmaraja College Kandy</h3>
        <span className="inline-block bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100 px-3 py-1 rounded-full text-sm font-semibold mb-2">Commerce Stream</span>
        <span className="inline-block bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 px-2 py-1 rounded text-xs mb-2">2020</span>
        <p className="text-gray-700 dark:text-gray-200 text-center">Completed G.C.E. Advanced Level in Commerce Stream.</p>
      </div>
    </div>
      </section>

      {/* Projects Section */}
  <section id="projects" className="px-8 py-16 bg-white dark:bg-gray-900">
    <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-yellow-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
        <Image src={projectOne} alt="Ayurvedic Android Mobile App" className="rounded-xl object-cover mb-4" />
        <h3 className="font-semibold text-lg mb-2">Ayurvedic Android Mobile App</h3>
        <a href="#" className="text-yellow-500 hover:underline">View Details</a>
      </div>
  <div className="bg-yellow-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
        <Image src={projectTwo} alt="Awurudu Nakath Android Mobile App" className="rounded-xl object-cover mb-4" />
        <h3 className="font-semibold text-lg mb-2">Awurudu Nakath Android Mobile App</h3>
        <a href="#" className="text-yellow-500 hover:underline">View Details</a>
      </div>
  <div className="bg-yellow-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
        <Image src={projectThree} alt="Finance App - DotNet" className="rounded-xl object-cover mb-4" />
        <h3 className="font-semibold text-lg mb-2">Finance App - DotNet</h3>
        <a href="#" className="text-yellow-500 hover:underline">View Details</a>
      </div>
  <div className="bg-yellow-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
        <Image src={projectFour} alt="Todo List Mobile App" className="rounded-xl object-cover mb-4" />
        <h3 className="font-semibold text-lg mb-2">Todo List Mobile App</h3>
        <a href="#" className="text-yellow-500 hover:underline">View Details</a>
      </div>
    </div>
      </section>

      {/* Contact & Footer */}
  <footer id="contact" className="mt-16 border-t-2 border-yellow-300 bg-white dark:bg-gray-900 py-10">
        <div className="flex flex-col items-center justify-center px-8">
          <h3 className="text-xl font-bold mb-6">Contact</h3>
          <div className="flex gap-4 text-3xl">
            <a href="https://github.com/hirunch" target="_blank" className="hover:text-yellow-500"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hiruna-wijesinghe/" target="_blank" className="hover:text-yellow-500"><FaLinkedin /></a>
            <a href="https://x.com/" target="_blank" className="hover:text-yellow-500"><FaSquareXTwitter /></a>
            <a href="https://www.instagram.com/hiruncw/" target="_blank" className="hover:text-yellow-500"><FaInstagramSquare /></a>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8">&copy; {new Date().getFullYear()} Hiruna Wijesinghe. All rights reserved.</p>
      </footer>
    </main>
  );
}
