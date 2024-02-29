import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import Landing from './pages/index'
import ProjectShow from './pages/ProjectShow'
import TaskShow from './pages/TaskShow'
import { projectsLoader, projectLoader, taskLoader } from './loaders'
import { deleteTaskAction } from './actions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Landing />} loader={projectsLoader} />
      <Route path="/projects/:id" element={<ProjectShow />} loader={projectLoader} />
      <Route path="/projects/tasks/:id" element={<TaskShow />} loader={taskLoader} />
      <Route path="/projects/:projectId/tasks/delete/:taskId" action={deleteTaskAction} />
    </Route>
  )
)

export default router
