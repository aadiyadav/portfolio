import { Link, useLocation } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
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
        <div className="h-14 flex lg:w-full lg:justify-around justify-between relative bg-zinc-900 text-white">
            <div className="flex items-center text-2xl font-bold lg:ml-12 ml-4 cursor-pointer hover:font-extrabold p-2 font-two">
                <Link to="/">Aadi Yadav</Link>
            </div>
            <div className="hidden lg:flex lg:items-center font-mono font-thin">
                <Link to='/' className="mx-10 p-2 cursor-pointer hover:font-extrabold text-xl">Home</Link>
                <Link to="/about" className="mx-10 p-2 cursor-pointer hover:font-extrabold text-xl">About</Link>
                <Link to="/projects" className="mx-10 p-2 cursor-pointer hover:font-extrabold text-xl">Projects</Link>
            </div>
            <div className="lg:hidden flex flex-col items-end mr-5 mt-3.5" >
                <button onClick={onOpen} className="relative"><RxHamburgerMenu size={28}/></button>
                {show ? (
                    <div className="absolute shrink flex flex-col mt-14 bg-zinc-900 text-xl rounded-md text-white z-10">
                            <Link to='/' className="cursor-pointer p-4 mx-5 bg-cover bg-center bg-no-repeat w-40 border-b-1 flex justify-center">Home</Link>
                            <Link to="/about" className="cursor-pointer p-4 mx-5 bg-cover bg-center bg-no-repeat w-40 border-b-1 flex justify-center">About</Link>
                            <Link to="/projects" className="cursor-pointer p-4 mx-5 bg-cover bg-center bg-no-repeat w-40 border-b-1 flex justify-center">Projects</Link>
                    </div>
                ) : ("")}
            </div>
        </div>
        <div className="h-0.5 w-full bg-neutral-700"></div>
        </div>
    )
}