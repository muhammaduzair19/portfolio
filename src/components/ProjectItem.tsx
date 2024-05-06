import { TiLocationArrow } from 'react-icons/ti'
import project from '../assets/project.png'
import { BsArrowUpRight } from "react-icons/bs";

const ProjectItem = () => {
    return (
        <div className='w-full min-h-80 rounded-md md:w-1/2 md:flex-1  flex flex-col overflow-hidden'>
            <div className="w-full flex-[3] " >
                <img
                    className='w-full h-full object-contain hover:scale-105 transition-all ease-in-out delay-150 duration-200 hover:translate-x-1 hover:-translate-y-1'
                    src={project} alt="" />
            </div>
            <div className="w-full h-full  flex-1 p-2 flex flex-col justify-center gap-5 text-one-0">
                <h1 className='h1 text-2xl flex items-center gap-5'>
                    The Fit Club
                    <span className='text-lg w-8 h-8 flex justify-center items-center rounded-full border border-white '>
                        <BsArrowUpRight />
                    </span>
                </h1>
                <div className='flex justify-between'>
                    <button className='flex text-black px-6 py-1 border-2 border-white cursor-pointer rounded-lg font-semibold text-md gap-3 items-center bg-white hover:text-white hover:bg-transparent transition-all ease-in-out delay-100 duration-500 hover:first-of-type:scale-75'>
                        <a href="">Github</a>
                    </button>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem