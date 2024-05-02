


type WorkItemProps = {
    company: string,
    position: string,
    start: string,
    end: string
}


const WorkItem = ({ company, position, start, end }: WorkItemProps) => {
    return (
        <div className="flex flex-col tracking-tighter">
            <div className="text-xl">
                <p className="uppercase text-xl font-bold text-white">{company}</p>
                <div className="text-one-0 flex justify-between">
                    <p>{position}</p>
                    <p>{start} - {end}</p>
                </div>
            </div>
        </div>
    )
}


export default WorkItem