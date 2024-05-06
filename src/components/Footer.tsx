import { Link } from "react-router-dom"
import { Socials } from "../constant"

const Footer = () => {
    return (
        <footer className="w-full brdr h-[200px] flex justify-center mx-auto items-center">
            <div className="w-full lg:max-w-4xl text-one-0 flex justify-between px-5">
                <div className="flex flex-col">
                    {
                        ['home', 'projects'].map((i, idx) => (
                            <Link
                                key={i + idx}
                                to={i === 'home' ? '/' : `/${i}`}
                                className='font-bold font-serif capitalize cursor-pointer text-md md:text-xl hover:text-white'>
                                {i}
                            </Link>
                        ))
                    }
                </div>

                <div className="flex flex-col">
                    {
                        Socials.map(({ name, link }, idx) => (
                            <a
                                key={name + idx}
                                className='font-bold capitalize cursor-pointer text-md font-serif hover:text-white  md:text-xl'
                                href={link}
                                target="_blank"
                            >{name}</a>
                        ))
                    }

                </div>

                <div className="flex flex-col">
                    <a
                        className='font-bold capitalize cursor-pointer text-md font-serif hover:text-white  md:text-xl'
                        href="mailto:muhammaduzairilyas@gmail.com">Contact</a>

                </div>
            </div>
        </footer>
    )
}

export default Footer