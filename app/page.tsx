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
  return (
      <main className={`${poppinsFont.className} bg-yellow-50 text-black p-5 md:px-20 lg:px-40`}>
        <section>
          <nav  className="flex justify-between">
          <h1 className="text-2xl">Portfolio</h1>
            <ul className="flex items-center gap-5">
              {/* <li className=" cursor-pointer text-xl mx-10">
                <BsFillMoonStarsFill/>
              </li> */}
              <li>
                <a href="#">blogs</a>
              </li>
              <li>
                <a href="#" className="bg-yellow-300 py-2 px-2 border-none rounded-md shadow-md" download={"Resume"}>Resume</a>
              </li>
            </ul>
          </nav>

          <div className="text-center">
            <h1 className="text-5xl my-5 md:my-10 lg:my-10">Hiruna Wijesinghe</h1>
            <h3 className="text-2xl">Mobile Apps and Website Developer</h3>
            <p className="max-w-xl md:mx-auto w- lg:mx-auto py-4 leading-6 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aspernatur officia molestiae! 
              Ipsa nesciunt placeat sapiente nobis eligendi tempore expedita incidunt magni, minima eaque ut et 
              tempora tenetur illo error?
            </p>
          </div>
          <div className="flex items-center text-4xl text-slate-600 justify-center my-10 gap-5">
            <a href="https://github.com/hirunch" target="_blank">
              <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/hiruna-wijesinghe/" target="_blank">
              <FaLinkedin/>
            </a>
            <a href="https://x.com/hirun_0" target="_blank">
              <FaSquareXTwitter/>
            </a>
            <a href="https://www.instagram.com/_.hiruna_/" target="_blank">
              <FaInstagramSquare/>
            </a>
          </div>

          <div className="m-auto relative bg-gradient-to-b from-yellow-300 w-60 h-60 rounded-full p-5 mt-20">
            <Image src={profilePicture} alt="user profile picture" layout="fill" objectFit="coverd"/>
          </div>
        </section>

        <section>
        <h1 className="text-center text-4xl my-11">Education</h1>
        <div className=" md:flex lg:flex gap-10 mx-auto justify-center">
          <div  className="my-5 bg-gradient-to-b from-yellow-200 p-5 rounded-xl shadow-md">
                <h2 className="text-2xl">Higher Education</h2>
                <div className="flex">
                <Image src={universityLogo} alt="University Logo" width={60} height={60}/>
                <h3 className=" my-auto text-right">The Open University of Sri Lanka</h3>    
                </div>
                <div className="mx-5">
                <p>Bachelor of Software Engineering</p>
                <p>Second Year Completed</p>
                </div>

          </div>

          <div className=" my-5 bg-gradient-to-b from-yellow-200 p-5 rounded-xl shadow-md">
            <h2 className="text-2xl m-2">G.C.E Advance Level</h2>
            <div className="flex mx-5">
            <Image src={schoolLogo} alt="School Logo" width={30} height={30}/>
            <h3 className=" my-auto mx-5 text-right">Dharmaraja College Kandy</h3>    
            </div>
            <div className="mx-5 my-2">
            <p>Commerce Stream</p>
            <p>2020</p>
            </div>
          </div>

        </div>
          
        </section>

        <section>

          <h2 className="text-center text-4xl my-11">Projects</h2>
          <div className="flex flex-col gap-10 p-10 text-center md:flex-row lg:flex-wrap">

            <div className="bg-gradient-to-b from-yellow-200 rounded-xl p-5 basis-1/3 flex-1">
              <p className="m-5">Ayurvedic Andorid Mobile App</p>
              <Image 
              src={projectOne} 
              alt="Project One"
              className="rounded-xl object-cover"/>
            </div>

            <div className="bg-gradient-to-b from-yellow-200 rounded-xl p-5 basis-1/3 flex-1">
              <p className="m-5">Awurudu Nakath Andorid Mobile App</p>
              <Image 
              src={projectTwo} 
              alt="Project One"
              className="rounded-xl object-cover"/>
            </div> 

            <div className="bg-gradient-to-b from-yellow-200 rounded-xl p-5 basis-1/3 flex-1">
              <p className="m-5">Finance App - DotNet</p>
              <Image 
              src={projectThree} 
              alt="Project One"
              className="rounded-xl object-cover"/>
            </div> 

            <div className="bg-gradient-to-b from-yellow-200 rounded-xl p-5 basis-1/3 flex-1">
              <p className="m-5">Todo List Mobile App</p>
              <Image 
              src={projectFour} 
              alt="Project One"
              className="rounded-xl object-cover"/>
            </div> 

          </div>
        </section>

        <footer className=" border-t-2 border-yellow-300">
          <div className="my-10">
            <div className="flex items-center text-4xl text-slate-600 my-2 gap-5 justify-center">
              <a href="https://github.com/hirunch" target="_blank">
                <FaGithub/>
              </a>
              <a href="https://www.linkedin.com/in/hiruna-wijesinghe/" target="_blank">
                <FaLinkedin/>
              </a>
              <a href="https://x.com/hirun_0" target="_blank">
                <FaSquareXTwitter/>
              </a>
              <a href="https://www.instagram.com/_.hiruna_/" target="_blank">
                <FaInstagramSquare/>
              </a>
          </div>
            
          </div>
          <p className="text-center">Chamix</p>
        </footer>
        
      </main>
  );
}
