import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import code from '../assets/code.png'
import Resume from '../assets/Resume.pdf'
import { BiDownload } from "react-icons/bi";
import WorkItem from "../components/WorkItem";


const Home = () => {
    return (
        <div className="w-full bg-bgdark-0">
            <section className="w-full mx-auto h-screen flex justify-center items-center bg-bgdark-0">
                <div className="w-full h-full lg:max-w-5xl flex flex-col gap-20 justify-center items-center px-5 lg:flex-row">
                    <div className="text-one-0 flex flex-col gap-4 lg:w-[60%]">
                        <p className="uppercase">hey, my name is <span className="text-white font-bold">uzair</span></p>
                        <p className="text-3xl font-bold md:text-3xl leading-tight tracking-tighter" >
                            <span className="text-white">
                                React JS Developer and Javascript enthusiast from Pakistan.
                            </span> I'm interested in learning new things about React, React Native, Node, and Typescript.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.github.com/"
                                target="_blank">
                                <FiGithub size={'1.5rem'} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muhammaduzair19"
                                target="_blank"
                            >
                                <FiLinkedin size={'1.5rem'} />
                            </a>
                            <a
                                href="https://www.x.com/zerryyy_"
                                target="_blank"
                            >
                                <FaXTwitter size={'1.5rem'} />
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-[80%] lg:w-[40%]">
                        <img className="w-full rounded-xl" src={code} alt="" />
                    </div>
                </div>
            </section>
            <section className="w-full h-screen flex  justify-center items-center">
                <div className="w-full h-full lg:max-w-5xl flex flex-col items-start gap-2 px-5">
                    <h2 className="uppercase text-white font-bold text-2xl">about me</h2>
                    <div className="text-one-0 text-xl lg:text-2xl flex flex-col gap-5 tracking-tighter ">
                        <p>I am React js developer and javascript developer from Pakistan, and an undergrad Computer Science student, specialising in mern-stack developement.

                        </p>
                        <p>
                            Currently working as a jr. react js developer at <span className="text-white font-semibold">Tassaract</span>, a B2C startup, where I completed my internship and learn new things from experienced seniors, and become the part of their wonderful developer's team.
                        </p>

                        <p>
                            My coding journey started from <span className="text-white font-semibold">Saylani Mass IT Training center</span>, where I learned mern stack development, under the supervision of experienced teacher and it developed my interest in WebDev.
                        </p>
                        <p>
                            Apart from technology, I am all about friends and family and watching movies.
                        </p>
                    </div>

                    <button className="flex mt-4 text-black px-2 py-1 border-2 border-white cursor-pointer rounded-md font-semibold text-md gap-3 items-center bg-white hover:text-white hover:bg-transparent transition-all delay-100 duration-500">
                        <a href={Resume} download>Resume.pdf</a>
                        <BiDownload />
                    </button>
                </div>

            </section>
            <section className="w-full mx-auto min-h-[30vh] justify-center items-center py-8">
                <div className="w-full h-full lg:max-w-5xl mx-auto flex flex-col gap-5 px-5">
                    <h2 className="uppercase text-white font-bold text-2xl">work</h2>
                    <WorkItem
                        company="Tassaract"
                        position='Jr. React Js Developer'   
                        start='10/2023'
                        end='Current'
                    />

                    <WorkItem
                        company="82 Solutions"
                        position='Sr. Business Developement Executive'
                        start='02/2022'
                        end='04/2023'
                    />
                </div>
            </section>
        </div>
    )
}






export default Home