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

            <Route path='create' action={createAction}/> {/*this is an action and doesnt render an element*/}
            <Route path='update/:id' action={updateAction}/> {/*this is an action and doesnt render an element*/}
            <Route path='delete/:id' action={deleteAction}/> {/*this is an action and doesnt render an element*/}
        </Route>
    )
)

export default router;