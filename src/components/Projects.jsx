import Bake from "/assets/projects/bake-house.png"
import Social from "/assets/projects/peaquack.png"
import Fin from "/assets/projects/fintech.jpg"
import doing from "/assets/projects/to-doing.png"
import studio from "/assets/projects/studio.png";

export default function Projects(){

    const handleClick = (link) => {
        window.open(link, "_blank")
    }

    return (
      <div className="bg-back text-white h-full lg:flex lg:justify-center">
        <div className="lg:w-3/5 md:px-10 px-6 py-10">
          <div className="md:text-4xl text-3xl font-bold my-4 font-heading">
            Projects
          </div>
          <div className="border rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center my-8 hover:shadow-proj transition">
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <div className="text-xl font-heading">
                  Stud.io - An E-Commerce Platform
                </div>
                <button
                  className="py-2 px-4 ml-2 border rounded-md hover:bg-white
                             hover:text-black transition duration-300 ease-in-out"
                  onClick={() =>
                    handleClick(
                      "https://github.com/aadiyadav/e-commerce-frontend.git"
                    )
                  }
                >
                  Github
                </button>
              </div>
              <div className="my-2 text-sm font-body">
                Architected high-availability scalable backend services using Node.js and Express.js with structured MVC design pattern. Implemented JWT authentication middleware and role-based access, mitigating 95% security vulnerabilities. Boosted search functionality through debouncing, reducing server load by 50% and improving data retrieval. Designed efficient state architecture using Redux/Context patterns, reducing component coupling by 40%.
              </div>
              <div className="flex flex-wrap lg:flex-row gap-x-2 font-heading font-bold text-base">
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  Typescript
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  React
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  Redux
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  JWT
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  TailwindCSS
                </span>
              </div>
            </div>
            <div className="w-full">
              <img
                src={studio}
                alt="YO"
                className="rounded-lg cursor-pointer"
                onClick={() =>
                  handleClick("https://studio-ecommerce.vercel.app/")
                }
              />
            </div>
          </div>
          <div className="border rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center my-10 hover:shadow-proj transition">
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <div className="text-xl font-heading">
                  To-Doing - Task Management Web Application
                </div>
                <button
                  className="py-2 px-4 ml-2 border rounded-md hover:bg-white
                             hover:text-black transition duration-300 ease-in-out"
                  onClick={() =>
                    handleClick("https://github.com/aadiyadav/to-do-app.git")
                  }
                >
                  Github
                </button>
              </div>
              <div className="my-2 text-sm font-body">
                Developed a full-stack task management system with 4-column Kanban workflow, achieving 35% improved user productivity. Streamlined data retrieval latency by 60% by writing highly efficient REST API endpoints for concurrent CRUD operations. Utilized ShadCN library to develop seamless task carousel and interactive deadline calendar with fully responsive design.
              </div>
              <div className="flex flex-wrap lg:flex-row gap-x-2 font-heading font-bold text-base">
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  Typescript
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  TailwindCSS
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  React
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  ShadCN
                </span>
              </div>
            </div>
            <div className="w-full">
              <img
                src={doing}
                alt="YO"
                className="rounded-lg cursor-pointer"
                onClick={() => handleClick("https://to-doing.vercel.app/")}
              />
            </div>
          </div>
          <div className="border rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center my-10 hover:shadow-proj transition">
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <div className="text-xl font-heading">
                  BINGOFIN - A Fintech Platform
                </div>
                <button
                  className="py-2 px-4 ml-2 border rounded-md hover:bg-white
                             hover:text-black transition duration-300 ease-in-out"
                  onClick={() =>
                    handleClick("https://github.com/aadiyadav/fintech.git")
                  }
                >
                  Github
                </button>
              </div>
              <div className="my-2 text-sm font-body">
                Developed a full-stack fintech platform using ReactJS and
                TailwindCSS for the front-end, and Node.js with Hasura and
                GraphQL for the backend. The platform features user
                authentication with login and sign-up pages, allowing users to
                securely check account balances, add or withdraw money, and view
                transaction history. Implemented a responsive design and
                efficient data querying to enhance user experience and
                performance.
              </div>
              <div className="flex flex-wrap lg:flex-row gap-x-2 font-heading font-bold text-base">
                <span className="bg-white w-min my-1 rounded-xl px-2 text-back">
                  React
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  TailwindCSS
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  Node.js
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  Hasura
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  GraphQL
                </span>
              </div>
            </div>
            <div className="w-full">
              <img src={Fin} alt="YO" className="rounded-lg cursor-auto" />
            </div>
          </div>
        </div>
      </div>
    );
}