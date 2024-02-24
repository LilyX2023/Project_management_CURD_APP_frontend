import {Link} from 'react-router-dom'

function GroupedTask({tasks}) {

    return (
        <div className="subtasks flex">
            {tasks.map(projectTask => {
            return(
                <div key={projectTask._id} className='task-card'>
                    <Link to={`/projects/tasks/${projectTask._id}`} className="task-details">
                        <h3 className='priority'> {projectTask.priority} </h3>
                        <h2> {projectTask.task} </h2>
                    </Link>

                </div>
                )
            })}
        </div>
       

    )
}

export default GroupedTask