import { FiGithub, FiLinkedin } from "react-icons/fi";

import { FaXTwitter } from "react-icons/fa6";


const Home = () => {
    return (
        <section className="w-full mx-auto h-screen flex justify-center items-center bg-bgdark-0">
            <div className="w-full h-full lg:max-w-5xl flex justify-center items-center px-5  ">
                <div className="text-one-0 flex flex-col gap-4">
                    <p className="uppercase">
                        hey, my name is uzair
                    </p>
                    <p className="text-3xl font-bold md:text-4xl">
                        <span className="text-white">
                            React JS Developer and Javascript enthusiast from Pakistan.
                        </span> I'm interested in learning new things about React, React Native, Node, and Typescript.
                    </p>
                    <div className="flex gap-4 text-2xl">
                        <a
                            href="https://www.github.com/"
                            target="_blank">
                            <FiGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammaduzair19"
                            target="_blank"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href="https://www.x.com/zerryyy_"
                            target="_blank"
                        >
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home