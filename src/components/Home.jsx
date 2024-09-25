import { useEffect } from "react"
import Net from "vanta/src/vanta.net"

export default function Home(){
    useEffect( () => {
        Net({
            el: "#vanta",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            spacing: 18.00,
            maxDistance: 18.00,           
            color: 0xa2a2a2,
            backgroundColor: 0x1d1d1d
        })
    }, [])
    return(
        <div id="vanta" className="flex-col items-center justify-center h-screen text-gray-300">
            <div className="flex items-center justify-center md:text-6xl sm:text-5xl text-3xl pt-80 font-six">
                <div className="md:mr-4 mr-2">Hi, I am</div>
                <div className="text-amber-300">Aadi Yadav</div>
                <div>.</div>
            </div>
            <div className="flex justify-center mt-5 mx-10 text-base font-one">
                A computer science student and MERN stack developer who loves coding...
            </div> 
        </div>
    )
}