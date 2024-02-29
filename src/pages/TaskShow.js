import { useLoaderData } from 'react-router-dom'
import { Form } from 'react-router-dom'
import { priorityNumberToString, prettifyStatus } from '../utils/utilFunctions'

function TaskShow() {
  const taskData = useLoaderData()

  const [priorityLabel, priorityColor] = priorityNumberToString(taskData['priority'])

  const status = prettifyStatus(taskData['status'])

  let statusSelection = {
    toDo: false,
    inProgress: false,
    completed: false
  }

  let prioritySelection = {
    high: false,
    medium: false,
    low: false
  }

  console.log(taskData)

  if (taskData.status === 'toDo') {
    statusSelection.toDo = true
  } else if (taskData.status === 'inProgress') {
    statusSelection.inProgress = true
  } else if (taskData.status === 'inProgress') {
    statusSelection.inProgress = true
  }

  if (taskData.priority === '1') {
    prioritySelection.high = true
  } else if (taskData.priority === '2') {
    prioritySelection.medium = true
  } else if (taskData.priority === '3') {
    prioritySelection.low = true
  }

  return (
    <div className="task-show-container flex">
      {/* <div className="task-show-content">
        <div className="project-name-task task-flex">
          <h2>Project:</h2>
          <p>{taskData['project']}</p>
        </div>
        <div className="task-description task-flex">
          <h2>Task:</h2>
          <p>{taskData['task']}</p>
        </div>
        <div className="task-status task-flex">
          <h2>Status:</h2>
          <p>{status}</p>
        </div>
        <div className="task-priority task-flex">
          <h2>Priority:</h2>
          <p className="task-priority">{priorityLabel}</p>
        </div>
      </div> */}
      <Form action={`/projects/${taskData.projectId}/tasks/${taskData._id}`} method="post">
        <div className="task-show-name-container">
          <div className="task-show-name-label"> Task: </div>
          <input className="task-show-name" type="text" value={taskData.task} />
        </div>

        <div className="task-show-bottom-row-container">
          <div className="task-show-dropdowns-container">
            <div className="task-show-status-container">
              <div className="task-show-status-label"> Status: </div>
              <select className="task-show-status">
                <option value="toDo" selected={statusSelection.toDo}>
                  To Do
                </option>
                <option value="inProgress" selected={statusSelection.inProgress}>
                  In Progress
                </option>
                <option value="completed" selected={statusSelection.completed}>
                  Completed
                </option>
              </select>
            </div>
            <div className="task-show-priority-container">
              <div className="task-show-priority-label"> Priority: </div>
              <select className="task-show-priority">
                <option value="1" selected={prioritySelection.high}>
                  High
                </option>
                <option value="2" selected={prioritySelection.medium}>
                  Medium
                </option>
                <option value="3" selected={prioritySelection.low}>
                  Low
                </option>
              </select>
            </div>
          </div>
          <div className="task-show-buttons-container">
            <div className="update-button-container">
              {/* the update button doesn't work yet because it needs an update function in actions.js */}
              <input className="update-button" type="submit" value="Update" />
            </div>
          </div>
        </div>
      </Form>
      <Form action={`/projects/${taskData.projectId}/tasks/delete/${taskData._id}`} method="post">
        <button className="delete-button">Delete</button>
      </Form>
    </div>
  )
}

export default TaskShow
