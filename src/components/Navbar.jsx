import { Link, useLocation } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar(){
    const [tab, setTab] = useState('home')
    const [show, setShow] = useState(false)
    const location = useLocation();

    const changeTab = (tab) => setTab(tab)

    const onOpen = () => {
        setShow(!show)
    }

    useEffect(() => {
        setShow(false);
    }, [location]);

    return (
      <div>
        <div className="lg:px-12 md:px-8 px-5 h-14 flex lg:w-full justify-between relative bg-zinc-900 text-white">
          <div className="flex items-center text-2xl font-bold cursor-pointer lg:mx-32 md:mx-20 py-2 font-two">
            <Link
              to="/"
              className="text-amber-500 relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              Aadi Yadav
            </Link>
          </div>
          <div className="hidden sm:flex justify-center items-center gap-x-6 md:mx-0 sm:mr-20">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwQVxPPZbBJbVCZzWbHLjkjCFrvcVjKZJDDclRRFpZgHMlKqNnJbCSKgfqjmjDMtWqFpTk"
              target="_blank"
            >
              <SiGmail
                size={30}
                className="text-white hover:text-red-500 transition-all"
              />
            </a>
            <a href="https://www.linkedin.com/in/aadi-yadav" target="_blank">
              <FaLinkedinIn
                size={30}
                className="text-white hover:text-blue-500 transition-all"
              />
            </a>
            <a href="https://github.com/aadiyadav" target="_blank">
              <TbBrandGithubFilled
                size={30}
                className="text-white hover:text-violet-500 transition-all"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center lg:gap-x-6 gap-x-4 font-six text-xl">
            <Link
              to="/"
              className={`px-2 py-1 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                tab == "home" ? "font-bold" : ""
              }`}
              onClick={() => changeTab("home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-2 py-1 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                tab == "about" ? "font-bold" : ""
              }`}
              onClick={() => changeTab("about")}
            >
              About
            </Link>
            <Link
              to="/resume"
              className={`px-2 py-1 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                tab == "resume" ? "font-bold" : ""
              }`}
              onClick={() => changeTab("resume")}
            >
              Resume
            </Link>
            <Link
              to="/projects"
              className={`px-2 py-1 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                tab == "projects" ? "font-bold" : ""
              }`}
              onClick={() => changeTab("projects")}
            >
              Projects
            </Link>
          </div>
          <div className="md:hidden flex flex-col items-end mt-3.5">
            <button onClick={onOpen} className="relative">
              <RxHamburgerMenu size={24} />
            </button>
            {show ? (
              <div className="absolute shrink flex flex-col mt-14 bg-zinc-900 text-lg rounded-md text-white z-10 font-six font-medium">
                <Link
                  to="/"
                  className={`cursor-pointer py-3 px-4 bg-cover bg-center bg-no-repeat border-b-1 flex justify-center w-full ${
                    tab == "home"
                      ? "text-zinc-900 bg-white border rounded-md"
                      : ""
                  }`}
                  onClick={() => changeTab("home")}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`cursor-pointer py-3 px-4 bg-cover bg-center bg-no-repeat border-b-1 flex justify-center ${
                    tab == "about"
                      ? "text-zinc-900 bg-white border rounded-md"
                      : ""
                  }`}
                  onClick={() => changeTab("about")}
                >
                  About
                </Link>
                <Link
                  to="/resume"
                  className={`cursor-pointer py-3 px-4 bg-cover bg-center bg-no-repeat border-b-1 flex justify-center w-full ${
                    tab == "resume"
                      ? "text-zinc-900 bg-white border rounded-md"
                      : ""
                  }`}
                  onClick={() => changeTab("resume")}
                >
                  Resume
                </Link>
                <Link
                  to="/projects"
                  className={`cursor-pointer py-3 px-4 bg-cover bg-center bg-no-repeat border-b-1 flex justify-center w-full ${
                    tab == "projects"
                      ? "text-zinc-900 bg-white border rounded-md"
                      : ""
                  }`}
                  onClick={() => changeTab("projects")}
                >
                  Projects
                </Link>
                <div className="flex sm:hidden justify-center items-center gap-x-3 p-4">
                  <a
                    href="https://github.com/aadiyadav"
                    target="_blank"
                    className="text-violet-500"
                  >
                    <TbBrandGithubFilled size={25} />
                  </a>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwQVxPPZbBJbVCZzWbHLjkjCFrvcVjKZJDDclRRFpZgHMlKqNnJbCSKgfqjmjDMtWqFpTk"
                    target="_blank"
                    className="text-red-500"
                  >
                    <SiGmail size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aadi-yadav"
                    target="_blank"
                    className="text-blue-500"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="h-0.5 w-full bg-neutral-700"></div>
      </div>
    );
}