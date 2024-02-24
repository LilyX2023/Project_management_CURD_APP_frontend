import { useLoaderData } from "react-router-dom"
import GroupedTask from "../components/groupedTask"

function ProjectShow() {
    const projectTasks = useLoaderData()

    return (
        <div className="project-show">
            <h1 className="project-name-show">{projectTasks[0]['project']}</h1>
            <div className="project-show-task flex">
                <GroupedTask tasks={projectTasks}/>
                <GroupedTask tasks={projectTasks}/>
                <GroupedTask tasks={projectTasks}/>
            
            </div>
        </div>
        
    )
}

export default ProjectShow