import { Link } from 'react-router-dom'

function GroupedTask({ tasks, heading }) {
  // users enter priority as 1,2 or 3 but we display it as Low, Medium, High
  function priorityNumberToString(priority) {
    if (priority === '1') {
      return ['High', 'red']
    } else if (priority === '2') {
      return ['Medium', 'yellow']
    } else {
      // priority 3 and more is of 'Low' priority
      return ['Low', 'green']
    }
  }

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