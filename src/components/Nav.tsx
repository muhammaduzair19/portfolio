import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';


const Nav = () => {
    return (
        <nav className="w-full  flex justify-between px-48 py-5">
            <div className='w-8 h-8' >
                <img src={Logo} alt="" />
            </div>
            <div className='text-one-0 flex gap-5 font-bold'>
                <Link to={'/'} className='hover:text-white cursor-pointer'>HOME</Link>
                <Link to={'/about'} className='hover:text-white cursor-pointer'>ABOUT</Link>
                <Link to={'/project'} className='hover:text-white cursor-pointer'>PROJECTS</Link>
            </div>
        </nav>
    )
}

export default Nav