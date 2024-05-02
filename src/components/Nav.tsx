import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';


const Nav = () => {


    return (
        <nav className='sticky top-0 left-0 w-full h-[70px] flex justify-center mx-auto items-center'>
            <div className='w-full h-full px-4 glass lg:max-w-5xl flex justify-between items-center'>
                <div className='w-9 h-9'>
                    <img src={Logo} alt="" />
                </div>
                <div className='flex gap-5 text-one-0'>

                    <Link
                        to={'/'}
                        className='font-bold font-serif capitalize cursor-pointer text-lg hover:text-white'>
                        Home
                    </Link>
                    <Link
                        to={'/projects'}
                        className='font-bold font-serif capitalize cursor-pointer text-lg hover:text-white'>
                        Projects
                    </Link>


                </div>
            </div>
        </nav>
    )
}

export default Nav