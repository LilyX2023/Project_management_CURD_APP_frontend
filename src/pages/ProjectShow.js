import { useLoaderData, Form } from "react-router-dom"
import GroupedTask from "../components/groupedTask"

function ProjectShow() {
    const projectTasks = useLoaderData()
    // console.log('project', projectTasks)

    // grouping subtasks of a project based on its status
    const todo = projectTasks.filter((item) => { 
        return item['status'] === 'todo'})
    const inProgress = projectTasks.filter((item) => { 
        return item['status'] === 'inprogress'})
    const done = projectTasks.filter((item) => { 
        return item['status'] === 'completed'})
    
    return (
        <div className="project-show">
            <h1 className="project-name-show">{projectTasks[0]['project']}</h1>

            <Form action={`/projects/${projectTasks[0].projectId}/tasks/create`} method='post' className>
                <input type='input' name='task' placeholder="Task description"/>
                <select name='priority'>
                    <option value="" disabled selected>Priority</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <input type='submit' value={'Add Task'} />
            </Form>

            <div className="project-show-task flex">
                <GroupedTask tasks={projectTasks} heading={"To do"}/>
                <GroupedTask tasks={projectTasks.slice(4,8)} heading={"In progress"}/>
                <GroupedTask tasks={projectTasks.slice(3,5)} heading={"Completed"}/>
            
            </div>
        </div>
        
    )
}

export default ProjectShow