import ProjectItem from "../components/ProjectItem.tsx"

const Projects = () => {
    return (
        <section className="w-full min-h-screen bg-bgdark-0 ">
            <div className="w-full h-full lg:max-w-5xl mx-auto flex flex-col p-5">
                <h1 className="text-3xl font-bold text-one-0 ">Projects</h1>
                <div className="w-full flex flex-wrap gap-2">
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </section>
    )
}

export default Projects