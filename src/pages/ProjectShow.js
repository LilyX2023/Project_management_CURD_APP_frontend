import { useLoaderData, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import GroupedTask from '../components/groupedTask'
import { projectLoader } from '../loaders'
import NewTask from '../components/newTask'

function ProjectShow() {
  const [projectTasks, setProjectTasks] = useState(useLoaderData())
  const params = useParams() // gives {id: '<id>'}
  const [addTasks, setAddTasks] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false) // for adding new task

  const URL = process.env.REACT_APP_URL

  useEffect(() => {
    // Wrapping the call in a function since useEffect cannot directly accept an async function
    const fetchProjectTasks = async () => {
      const data = await projectLoader({ params: params }) // creating params in the expected structure, that is, {params: {id: '<id>'}}
      setProjectTasks(data) // Update state with fetched data

      setAddTasks(false)
    }
    // Check if addTasks is true before fetching updated tasks
    if (addTasks) {
      fetchProjectTasks().catch(console.error) // Call the async function and catch any potential errors
    }
  }, [addTasks])

  async function handleNewTask(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const createdTask = {
      task: formData.get('task'),
      priority: formData.get('priority'),

      // using the first object since 'projectId' and 'project' field will have same value across all subtasks for a particular project
      projectId: params['id'],
      project: projectTasks?.[0]['project'] || '',

      status: 'toDo' // by default any new task will have 'toDo' status
    }

    await fetch(`${URL}/projects/tasks`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createdTask)
    })

    // anotther way to get updated list
    //To get the newly created task along with all fields added at the backend like mongodb _id, here using the response body. The response sent from server after the POST request, includes the status code, headers, and a body (check backend TaskController.js Post request). The body of the response contains the newly created resource (in this case, the task), including any additional properties that the backend server has added
    // const newTaskWithId = await response.json()

    // Update state with the newly created task
    // creating a new array so that memory reference to projectTasks changes and React detects this as a change in state variable
    // setProjectTasks((prevTasks) => [...prevTasks, newTaskWithId])

    // Note: Multiple state variable changes one after other like done below are usually queued and react optmizes re-rendering by looking at all queued staten variables changes

    // reset buttonClicked to hide the form after submission
    setButtonClicked(false)

    // setting add tasks state to true, so that page is re-rendered with the mongodb _id using useEffect callback
    setAddTasks(true)

    setProjectTasks(null) // for smoother rendering so that Virtual DOM now has to compare null to the new rendered component
  }

  // grouping subtasks of a project based on its status

  const todoTasks = projectTasks?.filter(item => {
    return item['status'] === 'toDo'
  })
  const inProgressTasks = projectTasks?.filter(item => {
    return item['status'] === 'inProgress'
  })
  const completedTasks = projectTasks?.filter(item => {
    return item['status'] === 'completed'
  })

  return (
    <div className="project-show">
      {projectTasks && <h1 className="project-name-show">{projectTasks?.[0]?.['project']}</h1>}
      {/* <button className='new-task-button flex border-corner' onClick={() => {setButtonClicked(true)}}>
                <i class="fa-sharp fa-light fa-plus"> Add a new task </i>
            </button>

           { buttonClicked ? 
           <NewTask handleNewTask={handleNewTask} />
           : null } */}
      <NewTask handleNewTask={handleNewTask} />

      {projectTasks && (
        <div className="project-show-task flex">
          <GroupedTask tasks={todoTasks} heading={'To do'} />
          <GroupedTask tasks={inProgressTasks} heading={'In progress'} />
          <GroupedTask tasks={completedTasks} heading={'Completed'} />
        </div>
      )}
    </div>
  )
}

export default ProjectShow
