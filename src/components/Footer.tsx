import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="w-full brdr h-[200px] flex justify-center mx-auto items-center">
            <div className="w-full lg:max-w-4xl text-one-0 flex justify-between px-5">
                <div className="flex flex-col">
                    {
                        ['home', 'projects'].map((i) => (
                            <Link to={i === 'home' ? '/' : `/${i}`}
                                className='font-bold font-serif capitalize cursor-pointer text-md md:text-xl hover:text-white'>
                                {i}
                            </Link>
                        ))
                    }
                </div>
                <div className="flex flex-col">
                    <a className='font-bold capitalize cursor-pointer text-md font-serif hover:text-white  md:text-xl'
                        href="https://www.x.com/zerryyy_">Twitter</a>
                    <a className='font-bold capitalize cursor-pointer text-md font-serif hover:text-white  md:text-xl'
                        href="https://www.x.com/zerryyy_">Github</a>
                    <a className='font-bold capitalize cursor-pointer text-md font-serif hover:text-white  md:text-xl'
                        href="https://www.x.com/zerryyy_">Linkedin</a>
                </div>
                <div className="flex flex-col">
                    <a
                        className='font-bold capitalize cursor-pointer text-md font-serif hover:text-white  md:text-xl'
                        href="mailto:muhammaduzairilyas@gmail.com">Contact</a>
                    <Link to={'/'}
                        className='font-bold capitalize cursor-pointer text-md font-serif hover:text-white  md:text-xl'>
                        Uses
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer