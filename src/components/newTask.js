import {Form} from "react-router-dom"

function NewTask({handleNewTask}) {
    return (
        <Form onSubmit={handleNewTask} className='new-task-form flex'>
                <div className="task-field flex">
                    <label> Description</label>
                    <textarea className="border-corner" name='task' placeholder="Enter task description"/>
                </div>
                <div className="task-field flex">
                    <label>Priority</label>
                    <select name='priority' className="border-corner">
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </select>
                </div>
                <div >
                    <input className="task-field border-corner create-task-button" type='submit' value='Create Task' />
                </div>
        </Form>
    )
}

export default NewTask