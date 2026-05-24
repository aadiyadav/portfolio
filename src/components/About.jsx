import html from "../../public/assets/logos/html.png"
import css from "../../public/assets/logos/css.png"
import js from "../../public/assets/logos/js.png"
import tcss from "../../public/assets/logos/tailwindcss.png"
import react from "../../public/assets/logos/reactjs.png"
import node from "../../public/assets/logos/node.png"
import express from "../../public/assets/logos/express.png"
import mongo from "../../public/assets/logos/mongodb.png"
import ts from "../../public/assets/logos/ts.png"
import cpp from "../../public/assets/logos/c++.png"
import c from "../../public/assets/logos/c.png"
import python from "../../public/assets/logos/python.png"
import sql from "../../public/assets/logos/sql.png"
import redux from "../../public/assets/logos/redux.png"
import firebase from "../../public/assets/logos/firebase.webp"
import jwt from "../../public/assets/logos/jwt.webp"

export default function About(){
    return(
        <div className="bg-back h-full text-white flex justify-center">
            <div className="lg:w-7/12 sm:px-16 px-6 py-10 text-justify">
                <div className="md:text-4xl text-3xl font-bold my-4 font-heading">Introduction</div>
                <div className="my-2 font-body md:text-base text-sm">
                    👋 Hello! I am a Computer Science graduate from Netaji Subhas 
                    University of Technology (2026 Batch), 
                    passionate about solving complex problems and exploring innovative technologies. 
                    Currently working as a Full Stack Developer Intern at Abould.
                </div>
                <div className="my-2 font-body md:text-base text-sm">
                    💻 My expertise spans full-stack development with MERN stack, cloud infrastructure, 
                    and enterprise application architecture. I've architected scalable backend services, 
                    implemented security-critical features, and optimized database performance while 
                    managing 100+ resumes in technical recruitment.
                </div>
                <div className="my-2 font-body md:text-base text-sm">
                    🎯 Beyond coding, I embrace diverse interests from mathematical problem-solving 
                    and game theory to photography 📸 and music 🎶. This blend of analytical and creative 
                    pursuits, combined with my strong mathematical foundation shapes my unique approach to technical challenges and complex problem-solving.
                </div>
                <div className="md:text-4xl text-3xl font-bold mt-8 flex font-heading">Skills</div>
                <div className="flex items-center justify-center md:gap-y-8 gap-y-4 md:gap-x-8 gap-x-4 my-4 flex-wrap font-body">
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={html} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">HTML</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={css} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-0.5">CSS</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={js} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-1">JavaScript</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-end">
                        <img src={tcss} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 mt-6">TailwindCSS</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={react} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">React</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-end">
                        <img src={node} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 mt-2">Node.js</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={express} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Express</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={mongo} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">MongoDB</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={ts} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">TypeScript</div>
                    </div>
                    <div className="group border rounded-md p-6 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={cpp} alt="" className="group-hover:scale-75 transition-transform duration-500"/>
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">C++</div>
                    </div>
                    <div className="group border rounded-md p-6 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={c} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">C</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={python} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Python</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={redux} alt="" className="group-hover:scale-75 transition-transform duration-500 mb-2" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Redux</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={firebase} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Firebase</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={jwt} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">JWT</div>
                    </div>
                    <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                        <img src={sql} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                        <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">SQL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}