import { useEffect } from "react"
import Net from "vanta/src/vanta.net"
import { TypeAnimation } from 'react-type-animation';

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
            <div className="flex items-center justify-center md:text-6xl sm:text-5xl text-3xl font-semibold pt-80 font-two">
                <div className="md:mr-4 mr-2">Hi, I am</div>
                <TypeAnimation
                    sequence={[
                        'Aadi Yadav.',
                        5000,
                        '',
                        500,
                    ]}
                    wrapper="div"
                    speed={3}
                    className="text-amber-300"
                    repeat={Infinity}
                />
                <div></div>
            </div>
            <div className="flex justify-center mt-5 mx-10 text-lg font-eight">
                A computer science student and MERN stack developer who loves coding...
            </div> 
        </div>
    )
}