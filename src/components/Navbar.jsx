import { Link, useLocation } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar(){

    const [show, setShow] = useState(false)
    const location = useLocation();

    const onOpen = () => {
        setShow(!show)
    }

    useEffect(() => {
        setShow(false);
    }, [location]);

    return(
        <div>
        <div className="lg:px-12 md:px-8 pr-4 sm:pl-16 pl-10 h-14 flex lg:w-full lg:justify-around justify-between relative bg-zinc-900 text-white">
            <div className="flex items-center text-2xl font-bold cursor-pointer hover:font-extrabold p-2 font-two">
                <Link to="/">Aadi Yadav</Link>
            </div>
            <div className="hidden md:flex justify-center items-center gap-x-6">
                <a href="https://www.linkedin.com/in/aadi-yadav" target="_blank"><FaLinkedinIn size={30}/></a>
                <a href="https://github.com/aadiyadav" target="_blank"><TbBrandGithubFilled size={30}/></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwQVxPPZbBJbVCZzWbHLjkjCFrvcVjKZJDDclRRFpZgHMlKqNnJbCSKgfqjmjDMtWqFpTk" target="_blank"><SiGmail size={30}/></a>
            </div>
            <div className="hidden md:flex items-center font-mono font-thin gap-x-10">
                <Link to='/' className="p-2 cursor-pointer hover:font-extrabold text-xl">Home</Link>
                <Link to="/about" className="p-2 cursor-pointer hover:font-extrabold text-xl">About</Link>
                <Link to="/projects" className="p-2 cursor-pointer hover:font-extrabold text-xl">Projects</Link>
            </div>
            <div className="md:hidden flex flex-col items-end sm:mr-10 mr-5 mt-3.5" >
                <button onClick={onOpen} className="relative"><RxHamburgerMenu size={28}/></button>
                {show ? (
                    <div className="absolute shrink flex flex-col mt-14 bg-zinc-900 text-xl rounded-md text-white z-10">
                            <Link to='/' className="cursor-pointer p-4 mx-5 bg-cover bg-center bg-no-repeat w-40 border-b-1 flex justify-center">Home</Link>
                            <Link to="/about" className="cursor-pointer p-4 mx-5 bg-cover bg-center bg-no-repeat w-40 border-b-1 flex justify-center">About</Link>
                            <Link to="/projects" className="cursor-pointer p-4 mx-5 bg-cover bg-center bg-no-repeat w-40 border-b-1 flex justify-center">Projects</Link>
                            <div className="flex justify-center items-center gap-x-6 p-4">
                                <a href="https://www.linkedin.com/in/aadi-yadav" target="_blank"><FaLinkedinIn size={30}/></a>
                                <a href="https://github.com/aadiyadav" target="_blank"><TbBrandGithubFilled size={30}/></a>
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwQVxPPZbBJbVCZzWbHLjkjCFrvcVjKZJDDclRRFpZgHMlKqNnJbCSKgfqjmjDMtWqFpTk" target="_blank"><SiGmail size={30}/></a>
                            </div>
                    </div>
                ) : ("")}
            </div>
        </div>
        <div className="h-0.5 w-full bg-neutral-700"></div>
        </div>
    )
}