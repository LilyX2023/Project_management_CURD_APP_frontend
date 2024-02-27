// router.js

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
// import ProjectShow from './pages/ProjectShow'
import TaskDetail from './pages/TaskDetail'
import ProjectDetail from './pages/ProjectDetail'
import { projectsLoader, projectLoader, taskLoader } from './loaders'
import { createAction, deleteAction, updateAction } from './actions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/projects" element={<Home />} loader={projectsLoader} />
      <Route path="/projects/:id" element={<ProjectDetail />} loader={projectLoader} />
      <Route path="/tasks/:id" element={<TaskDetail />} loader={taskLoader} />
      <Route path="/create" action={createAction} />
      <Route path="/update/:id" action={updateAction} />
      <Route path="/delete/:id" action={deleteAction} />
    </Route>
  )
)

export default router
