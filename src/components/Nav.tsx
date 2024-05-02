import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Nav = () => {
    const logoRef = useRef(null);
    const homeRef = useRef(null);
    const projectRef = useRef(null);

    useGSAP(() => {
        gsap.from(logoRef.current, {
            opacity: 0,
            y: -25,
            delay: 0.4,
            duration: 1,
        })

        gsap.from(homeRef.current, {
            opacity: 0,
            y: -25,
            delay: 0.4,
            duration: 1,
        })

        gsap.from(projectRef.current, {
            opacity: 0,
            y: -25,
            delay: 0.4,
            duration: 1,
        })
    }, []);


    return (
        <nav className='sticky top-0 left-0 w-full h-[70px] flex justify-center mx-auto items-center'>
            <div className='w-full h-full px-4 glass lg:max-w-5xl flex justify-between items-center'>
                <div className='w-9 h-9'>
                    <img ref={logoRef} src={Logo} alt="" />
                </div>
                <div className='flex gap-5 text-one-0'>

                    <Link
                        ref={homeRef} to={'/'}
                        className='font-bold font-serif capitalize cursor-pointer text-lg hover:text-white'>
                        Home
                    </Link>
                    <Link
                        ref={projectRef} to={'/projects'}
                        className='font-bold font-serif capitalize cursor-pointer text-lg hover:text-white'>
                        Projects
                    </Link>


                </div>
            </div>
        </nav>
    )
}

export default Nav