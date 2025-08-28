"use client";
import React, { useState, useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagramSquare   } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineer & Full Stack Developer";
  const typingSpeed = 50;

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // Typing animation
    let currentText = "";
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(typingInterval);
    };
  }, []);
  const [darkMode, setDarkMode] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
  <main className={`${poppinsFont.className} min-h-screen ${darkMode ? 'dark bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 text-gray-900'} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        loaded ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* Top Bar with Contact Info */}
        <div className={`hidden md:block py-2 px-8 ${
          darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'
        }`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:your.email@domain.com" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hirucw707@gmail.com</span>
              </a>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sri Lanka</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/hirunch" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/hiruna-wijesinghe/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><FaLinkedin /></a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><FaSquareXTwitter /></a>
              <a href="https://www.instagram.com/hiruncw/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><FaInstagramSquare /></a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`${
          darkMode 
            ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800' 
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
        }`}>
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex justify-between items-center">
              {/* Logo and Name */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image 
                    src={profilePicture} 
                    alt="Logo" 
                    width={40} 
                    height={40} 
                    className={`rounded-full border-2 ${darkMode ? 'border-yellow-500' : 'border-yellow-400'}`}
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 ${
                    darkMode ? 'border-gray-900 bg-green-500' : 'border-white bg-green-500'
                  }`}></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight">Hiruna Wijesinghe</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Software Engineer</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="sm:hidden relative z-50 p-2 rounded-lg border border-gray-200 dark:border-gray-700"
                onClick={() => setNavOpen(!navOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center gap-1.5 overflow-hidden">
                  <span className={`block h-0.5 w-5 bg-current transform transition-transform ${navOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                  <span className={`block h-0.5 w-5 bg-current transition-opacity ${navOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 w-5 bg-current transform transition-transform ${navOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
                </div>
              </button>

              {/* Desktop/Mobile Menu */}
              <div className={`${
                navOpen
                  ? 'fixed inset-0 top-[73px]'
                  : 'hidden sm:block'
              } sm:relative`}>
                {/* Background overlay for mobile */}
                {navOpen && (
                  <div className="fixed inset-0 top-[73px] bg-white dark:bg-gray-900 z-0"></div>
                )}
                <div className={`relative z-10 h-[calc(100vh-73px)] sm:h-auto ${
                  navOpen
                    ? 'flex flex-col justify-start pt-8 bg-white dark:bg-gray-900'
                    : 'sm:block'
                }`}>
                  <ul className={`flex w-full max-w-md mx-auto px-6 sm:px-0 sm:max-w-none ${
                    navOpen
                      ? 'flex-col items-center gap-y-6 text-lg'
                      : 'flex-row items-center gap-6'
                  }`}>
                    <li className="w-full sm:w-auto">
                      <a 
                        href="#projects" 
                        onClick={() => setNavOpen(false)}
                        className="block w-full text-center py-3 sm:py-0 font-medium hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors relative group"
                      >
                        Projects
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                      </a>
                    </li>
                    <li className="w-full sm:w-auto">
                      <a 
                        href="#skills" 
                        onClick={() => setNavOpen(false)}
                        className="block w-full text-center py-3 sm:py-0 font-medium hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors relative group"
                      >
                        Skills
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                      </a>
                    </li>
                    <li className="w-full sm:w-auto">
                      <a 
                        href="#education" 
                        onClick={() => setNavOpen(false)}
                        className="block w-full text-center py-3 sm:py-0 font-medium hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors relative group"
                      >
                        Education
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                      </a>
                    </li>
                    <li className="w-full sm:w-auto">
                      <a 
                        href="#contact" 
                        onClick={() => setNavOpen(false)}
                        className="block w-full text-center py-3 sm:py-0 font-medium hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors relative group"
                      >
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                      </a>
                    </li>
                    <li className="w-full sm:w-auto">
                      <button
                        aria-label="Toggle Dark Mode"
                        onClick={() => {
                          setDarkMode(!darkMode);
                          setNavOpen(false);
                        }}
                        className={`w-full sm:w-10 h-10 rounded-lg transition-all flex items-center justify-center ${
                          darkMode
                            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:text-yellow-300'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                        } transform hover:scale-105`}
                      >
                        <BsFillMoonStarsFill className="text-xl" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
  <section className="relative flex flex-col md:flex-row items-center justify-between px-8 pt-[160px] md:pt-[180px] pb-24 gap-10 bg-gradient-to-r from-yellow-100 via-white to-yellow-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden min-h-screen">
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-0 bg-[url('/code.png')] bg-repeat-space opacity-5"></div>
        </div>
        <div className="flex-1 text-center md:text-left relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-medium mb-4">Available for Freelance Projects</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Hi, I'm <span className="text-yellow-500 relative">Hiruna<span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-200 dark:bg-yellow-800 -z-10 transform -skew-x-12"></span></span></h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-400 dark:to-yellow-200 bg-clip-text text-transparent min-h-[40px]">
            {typedText}
            <span className="inline-block animate-[blink_1s_step-end_infinite]">|</span>
          </h2>
          <p className="max-w-lg text-lg mb-8 text-gray-600 dark:text-gray-300">Bachelor of Software Engineering undergraduate at The Open University of Sri Lanka. I specialize in building modern web, mobile, and desktop applications with a focus on user experience and performance.</p>
          <div className="flex gap-6 justify-center md:justify-start mb-8">
            <a href="https://github.com/hirunch" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-3xl transform transition-transform hover:scale-110"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/hiruna-wijesinghe/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-3xl transform transition-transform hover:scale-110"><FaLinkedin /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-3xl transform transition-transform hover:scale-110"><FaSquareXTwitter /></a>
            <a href="https://www.instagram.com/hiruncw/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-3xl transform transition-transform hover:scale-110"><FaInstagramSquare /></a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a href="#contact" className="w-full sm:w-auto inline-block bg-yellow-400 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition transform hover:-translate-y-1 font-semibold text-center">Contact Me</a>
            <a href="https://drive.google.com/file/d/1fXKFiu0N7dHD467QK2Ppqvc-dZLBGrns/view?usp=sharing" target="_blank" className="w-full sm:w-auto inline-block border-2 border-yellow-400 text-yellow-600 dark:text-yellow-400 py-3 px-8 rounded-lg hover:bg-yellow-400 hover:text-white transition font-semibold text-center">Download CV</a>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative z-10">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full shadow-xl bg-gradient-to-b from-yellow-300 to-yellow-100 dark:from-yellow-400/20 dark:to-yellow-600/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 rounded-full shadow-inner"></div>
            <Image src={profilePicture} alt="Profile" layout="fill" objectFit="cover" className="rounded-full" priority />
          </div>
        </div>
      </section>

      {/* Skills Section */}
  <section id="skills" className="px-8 py-24 bg-white dark:bg-gray-900 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">What I Do Best</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Professional Skillset</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Combining technical expertise with creative problem-solving to deliver exceptional digital solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-yellow-100 dark:border-yellow-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-900/30 dark:to-yellow-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 text-4xl text-yellow-500 flex gap-4 items-center justify-center">
                  <i className="devicon-react-original"></i>
                  <i className="devicon-nextjs-original"></i>
                  <i className="devicon-tailwindcss-plain"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Building responsive and dynamic user interfaces with modern web technologies.</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• React & Next.js</li>
                  <li>• Tailwind CSS</li>
                  <li>• TypeScript</li>
                </ul>
              </div>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-yellow-100 dark:border-yellow-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-900/30 dark:to-yellow-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 text-4xl text-yellow-500 flex gap-4 items-center justify-center">
                  <i className="devicon-flutter-plain"></i>
                  <i className="devicon-android-plain"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Mobile Development</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Creating cross-platform mobile applications with native performance.</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Flutter</li>
                  <li>• Android Native</li>
                  <li>• Mobile UI/UX</li>
                </ul>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-yellow-100 dark:border-yellow-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-900/30 dark:to-yellow-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 text-4xl text-yellow-500 flex gap-4 items-center justify-center">
                  <i className="devicon-nodejs-plain"></i>
                  <i className="devicon-dot-net-plain"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Developing robust and scalable server-side applications.</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Node.js & Express</li>
                  <li>• .NET Core</li>
                  <li>• RESTful APIs</li>
                </ul>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-yellow-100 dark:border-yellow-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-900/30 dark:to-yellow-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 text-4xl text-yellow-500 flex gap-4 items-center justify-center">
                  <i className="devicon-figma-plain"></i>
                  <i className="devicon-photoshop-plain"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Creating intuitive and visually appealing user experiences.</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Figma</li>
                  <li>• Adobe Photoshop</li>
                  <li>• Prototyping</li>
                </ul>
              </div>
            </div>
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
  <section id="projects" className="px-8 py-24 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Featured Work</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Recent Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Showcase of my latest development work across mobile and web platforms.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="relative overflow-hidden">
            <Image 
              src={projectOne} 
              alt="Ayurvedic Android Mobile App" 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <span className="inline-block px-3 py-1 bg-yellow-500 rounded-full text-sm font-medium mb-2">Mobile App</span>
                <h3 className="text-xl font-bold">Ayurvedic Android Mobile App</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">A comprehensive Ayurvedic medicine reference and consultation app built with native Android technology.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Android</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">SQLite</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Firebase</span>
            </div>
            <a href="#" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium">
              View Project Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="relative overflow-hidden">
            <Image 
              src={projectTwo} 
              alt="Awurudu Nakath Mobile App" 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <span className="inline-block px-3 py-1 bg-yellow-500 rounded-full text-sm font-medium mb-2">Mobile App</span>
                <h3 className="text-xl font-bold">Awurudu Nakath Mobile App</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">An astrological calendar app for Sri Lankan New Year celebrations with real-time notifications and event tracking.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Android</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">SQLite</span>
            </div>
            <a href="#" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium">
              View Project Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="relative overflow-hidden">
            <Image 
              src={projectThree} 
              alt="Finance App" 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <span className="inline-block px-3 py-1 bg-yellow-500 rounded-full text-sm font-medium mb-2">Web App</span>
                <h3 className="text-xl font-bold">Finance Management System</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">A comprehensive financial management system built with .NET Core, featuring expense tracking and reporting.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">.NET Core</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">C#</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">SQL Server</span>
            </div>
            <a href="#" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium">
              View Project Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="relative overflow-hidden">
            <Image 
              src={projectFour} 
              alt="Todo List App" 
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <span className="inline-block px-3 py-1 bg-yellow-500 rounded-full text-sm font-medium mb-2">Mobile App</span>
                <h3 className="text-xl font-bold">Advanced Todo List</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">A feature-rich todo list application with task categorization, reminders, and progress tracking.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Redux</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Firebase</span>
            </div>
            <a href="#" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium">
              View Project Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-yellow-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Open for collaborations and new opportunities. Feel free to reach out!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Ready to discuss your project?</p>
              <a href="mailto:hirucw707@gmail.com" className="text-yellow-500 hover:text-yellow-600 font-medium">hirucw707@gmail.com</a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Based in</p>
              <span className="text-yellow-500 font-medium">Sri Lanka</span>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Follow me on</p>
              <div className="flex gap-4 text-2xl text-gray-600 dark:text-gray-300">
                <a href="https://github.com/hirunch" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/hiruna-wijesinghe/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><FaLinkedin /></a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><FaSquareXTwitter /></a>
                <a href="https://www.instagram.com/hiruncw/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><FaInstagramSquare /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-yellow-200 dark:border-yellow-900/30 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image src={profilePicture} alt="Logo" width={32} height={32} className="rounded-full" />
              <span className="font-medium">Hiruna Wijesinghe</span>
            </div>
            <nav className="flex gap-6">
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors">Skills</a>
              <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors">Education</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors">Contact</a>
            </nav>
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Hiruna Wijesinghe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-yellow-400 dark:bg-yellow-500 text-white shadow-lg transform transition-all duration-300 hover:bg-yellow-500 dark:hover:bg-yellow-600 hover:scale-110 z-50 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </main>
  );
}
