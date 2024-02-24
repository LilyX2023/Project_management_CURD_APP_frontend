import { useLoaderData } from "react-router-dom"
import GroupedTask from "../components/groupedTask"

function ProjectShow() {
    const projectTasks = useLoaderData()

    return (
        <div className="project-show">
            <h1 className="project-name-show">{projectTasks[0]['project']}</h1>
            <div className="project-show-task flex">
                <GroupedTask tasks={projectTasks} heading={"To do"}/>
                <GroupedTask tasks={projectTasks.slice(4,8)} heading={"In progress"}/>
                <GroupedTask tasks={projectTasks.slice(3,5)} heading={"Completed"}/>
            
            </div>
        </div>
        
    )
}

export default ProjectShow