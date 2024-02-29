import { useLoaderData } from "react-router-dom"
import { Form } from "react-router-dom"
import {priorityNumberToString, prettifyStatus} from "../utils/utilFunctions"

function TaskShow() {
    const taskData = useLoaderData()
    
    const [priorityLabel, priorityColor] = priorityNumberToString(taskData['priority'])

    const status = prettifyStatus(taskData['status'])

    return (
        <div className="task-show-container flex">
            <div className='task-show-content'>
                <div className='project-name-task task-flex'>
                    <h2>Project:</h2>
                    <p>{taskData['project']}</p>
                </div>
                <div className='task-description task-flex'>
                    <h2>Task:</h2>
                    <p>{taskData['task']}</p>
                </div>
                <div className='task-status task-flex'>
                    <h2>Status:</h2>
                    <p>{status}</p>
                </div>
                <div className='task-priority task-flex'>
                    <h2>Priority:</h2>
                    <p className='task-priority'>{priorityLabel}</p>
                </div>
            </div>

            <div className='update-delete'>
                <button className="update-button" >Edit </button>
                    
                <Form action={`/projects/${taskData.projectId}/tasks/delete/${taskData._id}`} method='post'>
                    <button className="delete-button">Delete</button>
                </Form>
            </div>
        
        </div>
    )
}

export default TaskShow