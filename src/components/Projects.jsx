export default function Projects(){

    const handleClick = (link) => {
        window.open(link, "_blank")
    }

    return(
        <div className="bg-back text-white h-full lg:flex lg:justify-center">
            <div className="lg:w-3/5 px-10 py-10">
                <div className="text-4xl font-bold my-4 font-two">Projects</div>
                <div className="border rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center my-10 hover:shadow-proj transition">
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-six">Bake House - A Bakery Website</div>
                            <button className="py-2 px-4 lg:mr-6 ml-2 border rounded-md hover:bg-white
                             hover:text-black transition duration-300 ease-in-out"
                              onClick={() => handleClick('https://github.com/aadiyadav/BakeHouse.git')}>
                               Github
                            </button>
                        </div>
                        <div className="my-2 text-sm">I developed a multi-page
                             bakery website using React, 
                            incorporating seamless navigation with react-router-dom. The 
                            project involved designing an interactive user interface with custom 
                            components, highlighting my strong front-end development skills. I 
                            implemented Home, About, Login, and Contact pages, showcasing my 
                            ability to create cohesive and functional web applications.</div>
                        <div className="flex flex-col lg:flex-row font-mono">
                            <a href="" className="mr-6 underline hover:text-zinc-400">HTML</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">CSS</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">Javascript</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">React</a>
                        </div>
                    </div>
                    <div>
                        <img src="src\assets\projects\bake-house.png" alt="YO"
                        className="rounded-lg cursor-pointer"
                        onClick={() => handleClick("https://bake-house-bakery.vercel.app/")}/>
                    </div>
                </div>
                <div className="border rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center my-10 hover:shadow-proj transition">
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-six">PeaQuack - A Social Media Website</div>
                            <button className="py-2 px-4 lg:mr-6 ml-2 border rounded-md hover:bg-white
                             hover:text-black transition duration-300 ease-in-out"
                             onClick={() => handleClick("https://github.com/aadiyadav/PeaQuack-Frontend.git")}>
                                Github
                            </button>
                        </div>
                        <div className="my-2 text-sm">It is a single-page social media website 
                            using React, demonstrating my proficiency in modern front-end 
                            development. The project featured dynamic data rendering for 
                            the user feed, showcasing my skills in state management and 
                            data handling. I utilized MaterialUI for material icons and 
                            employed React hooks to implement interactive features such 
                            as a functional like button, significantly enhancing user 
                            engagement.</div>
                        <div className="flex flex-col lg:flex-row font-mono">
                            <a href="" className="mr-6 underline hover:text-zinc-400">HTML</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">CSS</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">Javascript</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">React</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">MaterialUI</a>
                        </div>
                    </div>
                    <div>
                    <img src="src\assets\projects\peaquack.png" alt="YO" 
                    className="rounded-lg cursor-pointer"
                    onClick={() => handleClick("https://peaquck.vercel.app/")}/>
                    </div>
                </div>
                <div className="border rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center my-10 hover:shadow-proj transition">
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-six">BINGOFIN - A Fintech Platform</div>
                            <button className="py-2 px-4 lg:mr-6 ml-2 border rounded-md hover:bg-white
                             hover:text-black transition duration-300 ease-in-out"
                             onClick={() => handleClick("https://github.com/aadiyadav/fintech.git")}>
                                Github
                            </button>
                        </div>
                        <div className="my-2 text-sm">Developed a full-stack fintech platform 
                            using ReactJS and TailwindCSS for the front-end, and Node.js with 
                            Hasura and GraphQL for the backend. The platform features user 
                            authentication with login and sign-up pages, allowing users to 
                            securely check account balances, add or withdraw money, and view 
                            transaction history. Implemented a responsive design and efficient 
                            data querying to enhance user experience and performance.</div>
                        <div className="flex flex-col lg:flex-row font-mono">
                            <a href="" className="mr-6 underline hover:text-zinc-400">React</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">TailwindCSS</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">Node.js</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">Hasura</a>
                            <a href="" className="mr-6 underline hover:text-zinc-400">GraphQL</a>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src="src\assets\projects\fintech.jpg" alt="YO" 
                        className="rounded-lg cursor-auto"/>
                    </div>
                </div>
            </div>
        </div>
    )
}