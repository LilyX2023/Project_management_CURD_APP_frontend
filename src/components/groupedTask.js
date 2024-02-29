import { Link } from 'react-router-dom'
import {priorityNumberToString} from "../utils/utilFunctions"

function GroupedTask({ tasks, heading }) {

  // sorting tasks based on priority 1, 2, 3 in ascending order with highest priority (priority 1) at the top
  tasks.sort((a, b) => a.priority - b.priority)

  // sorting based on creation time, such more recently added task shows at the top
  // tasks.sort((a, b) => b.created_on - a.created_on)

  return (
    <div className="subtasks flex border-corner">
      <h2 className="status-heading"> {heading} </h2>

      {tasks.map(projectTask => {
        const [priorityLabel, priorityColor] = priorityNumberToString(projectTask.priority)
        const className = `priority ${priorityColor}`
        return (
          <div key={projectTask._id} className="task-card border-corner">
            <Link to={`/projects/tasks/${projectTask._id}`} className="task-details">
              <div className="task-left-section">
                <div className={className}>{priorityLabel}</div>
              </div>
              <div className="task-right-section">
                <h2> {projectTask.task} </h2>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default GroupedTask