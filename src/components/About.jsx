export default function About(){
    return(
        <div className="bg-back h-full text-white flex justify-center">
            <div className="lg:w-1/2 px-10 py-10">
                <div className="text-3xl font-bold my-4 font-two">Introduction</div>
                <div className="my-2">
                    👨🏻‍💻 I am a student, currently in my 3rd year of pursuing Bachelor of 
                    Technology in Computer Science with specialization in Big Data Analytics 
                    from Netaji Subhas University of Technology. 🖊
                </div>
                <div className="my-2">
                    💻 Besides coding, I love listening to music 🎶 and photography 📸. I also like
                    playing sports and games, and solving difficult problems, making 
                    Mathematics my favourite subject. I also keep interest in topics like game
                    theory. 🧠
                </div>
                <div className="my-2">
                    🔥 I am a person with high self-confidence 
                    and self-motivation, which always drives me to work and give my best shot. 
                    I am eagerly looking forward to work for your company and contribute my skills.
                </div>
                <div className="text-3xl font-bold mt-12 flex font-two">Skills</div>
                <div className="flex items-center justify-around my-4 flex-wrap font-six">
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\html.png' alt="" className="mb-4" />
                        <div className="flex justify-center text-2xl">HTML</div>
                    </div>
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\css.png' alt="" className="mb-5" />
                        <div className="flex justify-center text-2xl">CSS</div>
                    </div>
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\js.png' alt="" className="mb-6" />
                        <div className="flex justify-center text-2xl">JavaScript</div>
                    </div>
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\tailwindcss.png' alt="" className="mt-7 mb-10" />
                        <div className="flex justify-center text-2xl">TailwindCSS</div>
                    </div>
                </div>
                <div className="flex items-center justify-around mt-8 flex-wrap font-six">
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\reactjs.png' alt="" className="mb-5" />
                        <div className="flex justify-center text-2xl">React</div>
                    </div>
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\node.png' alt="" className="mt-2 mb-7" />
                        <div className="flex justify-center text-2xl">Node.js</div>
                    </div>
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\express.png' alt="" className="mb-5" />
                        <div className="flex justify-center text-2xl">Express</div>
                    </div>
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\mongodb.png' alt="" className="mb-5" />
                        <div className="flex justify-center text-2xl">MongoDB</div>
                    </div>
                </div>
                <div className="flex items-center justify-around mt-8 flex-wrap font-six">
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\ts.png' alt="" className="mb-6" />
                        <div className="flex justify-center text-2xl">TypeScript</div>
                    </div>
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\c++.png' alt="" className="mb-2.5"/>
                        <div className="flex justify-center text-2xl">C++</div>
                    </div>
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\c.png' alt="" className="mb-3" />
                        <div className="flex justify-center text-2xl">C</div>
                    </div>
                    <div className="border rounded-md p-6 w-40 h-56 my-4 hover:bg-neutral-800 hover:shadow-lang transition">
                        <img src='src\assets\logos\python.png' alt="" className="mb-6" />
                        <div className="flex justify-center text-2xl">Python</div>
                    </div>
                </div>
            </div>
        </div>
    )
}