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
        <div className="lg:w-3/5 md:px-10 px-6 md:py-10 py-4">
          <div className="md:text-5xl text-4xl font-bold font-seven">
            Projects
          </div>
          <div className="border rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center my-10 hover:shadow-proj transition">
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <div className="text-xl font-six">
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
              <div className="my-2 text-sm font-nine">
                Developed a JWT-secured fully-functional e-commerce website.
                Multiple functionalities include Login/Sign-In, Admin Panel, Add
                to Cart, Search Products, etc. Key features include a responsive
                design with role-based access control, a debounced search that
                decreased server requests and improves response speed, and
                efficient state management with Redux/Context.
              </div>
              <div className="flex flex-wrap lg:flex-row gap-x-2 font-seven font-bold text-base">
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  Context API
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  Redux
                </span>
                <span className="bg-white rounded-xl px-2 text-back my-1">
                  JWT
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  React-Toast
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
                <div className="text-xl font-six">
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
              <div className="my-2 text-sm font-nine">
                Developed a responsive task manager web application featuring a
                4-column workflow system for effective task visualization. Key
                features include complete CRUD functionality via a custom
                RESTful API, real-time updates using React hooks, and a fully
                responsive design that adapts to all devices.
              </div>
              <div className="flex flex-wrap lg:flex-row gap-x-2 font-seven font-bold text-base">
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
                <div className="text-xl font-six">
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
              <div className="my-2 text-sm font-nine">
                Developed a full-stack fintech platform using ReactJS and
                TailwindCSS for the front-end, and Node.js with Hasura and
                GraphQL for the backend. The platform features user
                authentication with login and sign-up pages, allowing users to
                securely check account balances, add or withdraw money, and view
                transaction history. Implemented a responsive design and
                efficient data querying to enhance user experience and
                performance.
              </div>
              <div className="flex flex-wrap lg:flex-row gap-x-2 font-seven font-bold text-base">
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
          <div className="border rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center my-10 hover:shadow-proj transition">
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <div className="text-xl font-six">
                  Bake House - A Bakery Website
                </div>
                <button
                  className="py-2 px-4 ml-2 border rounded-md hover:bg-white
                             hover:text-black transition duration-300 ease-in-out"
                  onClick={() =>
                    handleClick("https://github.com/aadiyadav/BakeHouse.git")
                  }
                >
                  Github
                </button>
              </div>
              <div className="my-2 text-sm font-nine">
                I developed a multi-page bakery website using React,
                incorporating seamless navigation with react-router-dom. The
                project involved designing an interactive user interface with
                custom components, highlighting my strong front-end development
                skills. I implemented Home, About, Login, and Contact pages,
                showcasing my ability to create cohesive and functional web
                applications.
              </div>
              <div className="flex flex-wrap lg:flex-row gap-x-2 font-seven font-bold text-base">
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  HTML
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  CSS
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  Javascript
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  React
                </span>
              </div>
            </div>
            <div className="w-full">
              <img
                src={Bake}
                alt="YO"
                className="rounded-lg cursor-pointer"
                onClick={() =>
                  handleClick("https://bake-house-bakery.vercel.app/")
                }
              />
            </div>
          </div>
          <div className="border rounded-lg flex flex-col-reverse lg:flex-row justify-between items-center my-10 hover:shadow-proj transition">
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <div className="text-xl font-six">
                  PeaQuack - A Social Media Website
                </div>
                <button
                  className="py-2 px-4 ml-2 border rounded-md hover:bg-white
                             hover:text-black transition duration-300 ease-in-out"
                  onClick={() =>
                    handleClick(
                      "https://github.com/aadiyadav/PeaQuack-Frontend.git"
                    )
                  }
                >
                  Github
                </button>
              </div>
              <div className="my-2 text-sm font-nine">
                It is a single-page social media website using React,
                demonstrating my proficiency in modern front-end development.
                The project featured dynamic data rendering for the user feed,
                showcasing my skills in state management and data handling. I
                utilized MaterialUI for material icons and employed React hooks
                to implement interactive features such as a functional like
                button, significantly enhancing user engagement.
              </div>
              <div className="flex flex-wrap lg:flex-row gap-x-2 font-seven font-bold text-base">
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  HTML
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  CSS
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  Javascript
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  React
                </span>
                <span className="bg-white rounded-xl px-2 text-back w-min my-1">
                  MaterialUI
                </span>
              </div>
            </div>
            <div className="w-full">
              <img
                src={Social}
                alt="YO"
                className="rounded-lg cursor-pointer"
                onClick={() => handleClick("https://peaquck.vercel.app/")}
              />
            </div>
          </div>
        </div>
      </div>
    );
}