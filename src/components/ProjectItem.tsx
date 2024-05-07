import { BsArrowUpRight } from "react-icons/bs";

const ProjectItem = ({ id, title, livelink, gitlink, image }: projectType) => {
    return (
        <div id={id.toString()} className='w-full min-h-80 mt-2 md:mt-4 lg:mt-7 cursor-pointer rounded-md md:w-[46%] flex flex-col overflow-hidden'>
            <div className="w-full flex-[3] " >
                <img
                    className='w-full h-full object-contain hover:rotate-1 hover:scale-105 transition-all ease-in-out delay-150 duration-200 hover:translate-x-1 hover:-translate-y-1'
                    src={image} alt="" />
            </div>
            <div className="w-full h-full relative flex-1 p-2 flex flex-col justify-center gap-5 text-one-0">
                <a
                    target="_blank"
                    href={livelink}
                    className='link-anim cursor-pointer hover:text-white text-2xl flex items-center gap-5'>
                    {title}
                    <span className='text-lg w-7 h-7 flex justify-center items-center rounded-full border border-white '>
                        <BsArrowUpRight />
                    </span>
                </a>

                <div className='flex justify-between'>
                    <button className='flex text-black px-6 py-1 border-2 border-white cursor-pointer rounded-lg font-semibold text-md gap-3 items-center bg-white hover:text-white hover:bg-transparent transition-all ease-in-out delay-100 duration-500'>
                        <a target="_blank" href={gitlink}>Github</a>
                    </button>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem