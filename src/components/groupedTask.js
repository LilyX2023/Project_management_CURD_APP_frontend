import {Link} from 'react-router-dom'

function GroupedTask({tasks, heading}) {

    function priorityNumberToString(priority) {
        if (priority === 1) {
            return ['High', 'red']
        }
        else if (priority === 2) {
            return ['Medium', 'yellow']
        }
        else { // priority 3 and more is of 'Low' priority
            return ['Low', 'green']
        }
    }

    return (
        <div className="subtasks flex border-corner">
            <h2 className="status-heading"> {heading} </h2>
            {tasks.map(projectTask => {
                const [priorityLabel, priorityColor] = priorityNumberToString(projectTask.priority)
                const className = `priority ${priorityColor}`
            return(
                <div key={projectTask._id} className='task-card border-corner'>
                    <Link to={`/projects/tasks/${projectTask._id}`} className="task-details">
                        <div className={className}> 
                            {priorityLabel} 
                        </div>
                        <h2> {projectTask.task} </h2>
                    </Link>

                </div>
                )
            })}
        </div>
       

    )
}

export default GroupedTask