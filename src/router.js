import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import ProjectShow from './pages/ProjectShow'
import { projectLoader } from './loaders'
import {updateAction, createAction, deleteAction} from './actions'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App /> }>
            {/* <Route path='' element={<Landing/>} loader={peopleLoader}/> */}
            <Route path='/projects/:id' element={<ProjectShow/>} loader={projectLoader}/>

            <Route path='create' action={createAction}/>
            <Route path='update/:id' action={updateAction}/>
            <Route path='delete/:id' action={deleteAction}/>
            
            {/* Route to create a subtask of a project */}
            {/* <Route path='projects/:id/tasks/create' action={createTaskAction}/> */}
        </Route>
    )
)

export default router;