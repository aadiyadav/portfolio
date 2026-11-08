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
import js from "../../public/assets/logos/js.png"
import nextjs from "../../public/assets/logos/nextjs.png"
import fastapi from "../../public/assets/logos/fastapi.png"
import docker from "../../public/assets/logos/docker.png"
import postgres from "../../public/assets/logos/postgresql.png"
import redis from "../../public/assets/logos/redis.png"
import langchain from "../../public/assets/logos/langchain.png"

export default function About(){
    return(
        <div className="bg-back h-full text-white flex justify-center">
            <div className="lg:w-7/12 sm:px-16 px-6 py-10 text-justify">
                <div className="md:text-4xl text-3xl font-bold my-4 font-heading">Introduction</div>
                <div className="my-3 font-body md:text-base text-sm leading-relaxed">
                    👋 Hello! I am a Computer Science graduate from Netaji Subhas 
                    University of Technology (NSUT, 2026 Batch), 
                    passionate about building resilient systems and exploring innovative technologies. 
                    Currently working as a <span className="text-amber-400 font-semibold">Software Engineer</span> at Abould, where I engineer scalable SaaS architectures and intelligent AI-driven engines.
                </div>
                <div className="my-3 font-body md:text-base text-sm leading-relaxed">
                    💻 My expertise spans <span className="font-semibold text-white">Full-Stack SaaS Architecture (MERN, Next.js, FastAPI)</span>, <span className="font-semibold text-white">Cloud Infrastructure (VPS, Docker, Load Balancing)</span>, and <span className="font-semibold text-white">Generative AI / RAG Pipelines</span>. From architecting 10+ enterprise SaaS platforms with 100% operational uptime to publishing peer-reviewed AI benchmark research with <span className="font-semibold text-white">DRDO</span> (accepted at IC-AIMLC 2026) and conducting 75+ technical interviews across 300+ screened engineering resumes, I focus on end-to-end product delivery, high availability, and database performance engineering.
                </div>
                <div className="my-3 font-body md:text-base text-sm leading-relaxed">
                    🎯Beyond software engineering, I embrace diverse analytical and creative pursuits from mathematical problem-solving and game theory to photography 📸 and music 🎶. I have served as <span className="font-semibold text-white">President of the Indian Game Theory Society</span>, <span className="font-semibold text-white">President of Junoon Photography Society</span>, and <span className="font-semibold text-white">Director at Venatus (Tech & Gaming Society)</span> at NSUT. Combined with a strong academic foundation (CBSE Class XII School Topper with a National Top 0.1% Merit Certificate in Math and CS), this blend of analytical rigor and creative pursuit shapes my disciplined approach to technical challenges.
                </div>
                <div className="md:text-4xl text-3xl font-bold mt-8 flex font-heading">Skills</div>
                <div className="flex flex-col gap-y-6 sm:gap-y-8 my-6 font-body items-center">
                    {/* Line 1: MERN Stack */}
                    <div className="flex justify-center items-center md:gap-x-8 gap-x-4 gap-y-4 flex-wrap">
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={mongo} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">MongoDB</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={express} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Express</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={react} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">React</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-end">
                            <img src={node} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 mt-2">Node.js</div>
                        </div>
                    </div>

                    {/* Line 2: Modern Frontend */}
                    <div className="flex justify-center items-center md:gap-x-8 gap-x-4 gap-y-4 flex-wrap">
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={nextjs} alt="" className="group-hover:scale-75 transition-transform duration-500 bg-white rounded-full" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Next.js</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={ts} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">TypeScript</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-end">
                            <img src={tcss} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 mt-6">TailwindCSS</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={redux} alt="" className="group-hover:scale-75 transition-transform duration-500 mb-2" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Redux</div>
                        </div>
                    </div>

                    {/* Line 3: GenAI Methodologies & Microservices */}
                    <div className="flex justify-center items-center md:gap-x-8 gap-x-4 gap-y-4 flex-wrap">
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={python} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Python</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={fastapi} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">FastAPI</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={langchain} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">LangChain</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={docker} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Docker</div>
                        </div>
                    </div>

                    {/* Line 4: Databases & Cloud */}
                    <div className="flex justify-center items-center md:gap-x-8 gap-x-4 gap-y-4 flex-wrap">
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={postgres} alt="" className="group-hover:scale-75 transition-transform duration-500 w-40" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">PostgreSQL</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={sql} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">SQL</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={redis} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Redis</div>
                        </div>
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={firebase} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Firebase</div>
                        </div>
                    </div>

                    {/* Line 5: Core Programming & Security */}
                    <div className="flex justify-center items-center md:gap-x-8 gap-x-4 gap-y-4 flex-wrap">
                        <div className="group border rounded-md p-4 sm:w-40 w-32 sm:h-56 h-44 bg-neutral-900 hover:bg-neutral-800 hover:shadow-lang-hover transition duration-300 cursor-pointer flex flex-col items-center justify-center">
                            <img src={js} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-1">JavaScript</div>
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
                            <img src={jwt} alt="" className="group-hover:scale-75 transition-transform duration-500" />
                            <div className="flex justify-center md:text-2xl text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">JWT</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
