import { Form } from 'react-router-dom'

function NewTask({ handleNewTask }) {
  return (
    <div className="new-task-container">
      <Form onSubmit={handleNewTask} className="new-task-form flex">
        <div className="new-task-label">New task: </div>
        <input className="task-name" name="task" />
        <div className="new-task-label">Priority:</div>
        <select name="priority" className="border-corner">
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3" selected="selected">
            Low
          </option>
        </select>
        <input type="submit" value="Create New Task" />
      </Form>
    </div>
  )
}

export default NewTask
