import { useLoaderData, useNavigate } from 'react-router-dom'
import { Form } from 'react-router-dom'
import { priorityNumberToString, databaseStatus } from '../utils/utilFunctions'

const URL = process.env.REACT_APP_URL

function TaskShow() {
  const taskData = useLoaderData()

  const navigate = useNavigate()

  const [priorityLabel, priorityColor] = priorityNumberToString(taskData['priority'])

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

  console.log('taskData', taskData)

  if (taskData.status === 'toDo') {
    statusSelection.toDo = true
  } else if (taskData.status === 'inProgress') {
    statusSelection.inProgress = true
  } else if (taskData.status === 'completed') {
    statusSelection.completed = true
  }

  if (taskData.priority === '1') {
    prioritySelection.high = true
  } else if (taskData.priority === '2') {
    prioritySelection.medium = true
  } else if (taskData.priority === '3') {
    prioritySelection.low = true
  }

//  update a task of a project
const handleSubmit = async (event) => {

    event.preventDefault()

    const formData = new FormData(event.target)
    const updatedTask = {
        task: formData.get('task'),
        priority: formData.get('priority'),
        projectId: taskData['projectId'],
        project: taskData['project'],
        status: databaseStatus(formData.get('status'))
    }

    console.log('updatedtask', updatedTask)

    await fetch(`${URL}/projects/tasks/${taskData['_id']}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    });

    navigate(`/projects/${taskData['projectId']}`)
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


      <Form onSubmit={handleSubmit}>
        <div className="task-show-name-container">
          <div className="task-show-name-label"> Task: </div>
          <input className="task-show-name" type="text" name="task" defaultValue={taskData.task} />
        </div>

        <div className="task-show-bottom-row-container">
          <div className="task-show-dropdowns-container">
            <div className="task-show-status-container">
              <div className="task-show-status-label"> Status: </div>
              <select name="status" className="task-show-status">
                <option defaultValue="toDo" selected={statusSelection.toDo}>
                  To Do
                </option>
                <option defaultValue="inProgress" selected={statusSelection.inProgress}>
                  In Progress
                </option>
                <option defaultValue="completed" selected={statusSelection.completed}>
                  Completed
                </option>
              </select>
            </div>
            <div className="task-show-priority-container">
              <div className="task-show-priority-label"> Priority: </div>
              <select name="priority" className="task-show-priority">
                <option defaultValue="1" selected={prioritySelection.high}>
                  High
                </option>
                <option defaultValue="2" selected={prioritySelection.medium}>
                  Medium
                </option>
                <option defaultValue="3" selected={prioritySelection.low}>
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
