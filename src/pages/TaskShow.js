import { useLoaderData } from "react-router-dom"
import { Form } from "react-router-dom"
import {priorityNumberToString, prettifyStatus} from "../utils/utilFunctions"
import { useState } from "react";


function TaskShow() {
    const [editing, setEditing] = useState(false);
    const [editedTaskData, setEditedTaskData] = useState({ ...useLoaderData() });
    const [priorityLabel, priorityColor] = priorityNumberToString(editedTaskData['priority']);
    const status = prettifyStatus(editedTaskData['status']);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make the API call to update the task on the backend
            await fetch(`${URL}/projects/tasks/${editedTaskData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    project: editedTaskData.project,
                    task: editedTaskData.task,
                    status: editedTaskData.status,
                    priorityLabel: editedTaskData.priorityLabel
                })
            });
            // After successful update, reset the editing state
            setEditing(false);
        } catch (error) {
            console.error("Error editing task:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedTaskData({ ...editedTaskData, [name]: value });
    };

    return (
        <div className="task-show-container flex">
            <div className='task-show-content'>
                {!editing ? (
                    <>
                        <div className='project-name-task task-flex'>
                            <h2>Project:</h2>
                            <p>{editedTaskData['project']}</p>
                        </div>
                        <div className='task-description task-flex'>
                            <h2>Task:</h2>
                            <p>{editedTaskData['task']}</p>
                        </div>
                        <div className='task-status task-flex'>
                            <h2>Status:</h2>
                            <p>{status}</p>
                        </div>
                        <div className='task-priority task-flex'>
                            <h2>Priority:</h2>
                            <p className='task-priority'>{priorityLabel}</p>
                        </div>
                    </>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className='project-name-task task-flex'>
                            <h2>Project:</h2>
                            <input type="text" name="project" value={editedTaskData.project} onChange={handleChange} />
                        </div>
                        <div className='task-description task-flex'>
                            <h2>Task:</h2>
                            <input type="text" name="task" value={editedTaskData.task} onChange={handleChange} />
                        </div>
                        <div className='task-status task-flex'>
                            <h2>Status:</h2>
                            <input type="text" name="status" value={editedTaskData.status} onChange={handleChange} />
                        </div>
                        <div className='task-priority task-flex'>
                            <h2>Priority:</h2>
                            <input type="text" name="priorityLabel" value={editedTaskData.priorityLabel} onChange={handleChange} />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                )}
            </div>

            <div className='update-delete'>
                {!editing && <button className="update-button" onClick={handleEdit}>Edit</button>}
                <Form action={`/projects/${editedTaskData.projectId}/tasks/delete/${editedTaskData._id}`} method='post'>
                    <button className="delete-button">Delete</button>
                </Form>
            </div>

        </div>
    );
}

export default TaskShow;