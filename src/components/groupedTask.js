import {Link} from 'react-router-dom'

function GroupedTask({tasks, heading}) {

    return (
        <div className="subtasks flex border-corner">
            <h2 className="status-heading"> {heading} </h2>
            {tasks.map(projectTask => {
            return(
                <div key={projectTask._id} className='task-card border-corner'>
                    <Link to={`/projects/tasks/${projectTask._id}`} className="task-details">
                        <div className='priority'> {projectTask.priority} </div>
                        <h2> {projectTask.task} </h2>
                    </Link>

                </div>
                )
            })}
        </div>
       

    )
}

export default GroupedTask