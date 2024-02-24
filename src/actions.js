import { redirect } from "react-router-dom";


const URL = process.env.REACT_APP_URL;

export const updateAction = async ({ request, params }) => {
    const formData = await request.formData() //the request object has data for forms. We can access it. 
    const updatedProject = {
        project: formData.get('project'), 
        status: formData.get('status'), 
        createdOn: formData.get('created_on'), 
        deadline: formData.get('deadline'),
        finishedOn: formData.get('finished_on')
    }
    console.log(updatedProject)

    await fetch(`${URL}/project/${params.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProject)
    })

    return redirect('/') //go back to the landing page 
}

//added this new createAction function
export const createAction = async ({ request }) => {
    const formData = await request.formData() //the request object has data for forms. We can access it. 
    const createdProject = {
        project: formData.get('project'), 
        status: formData.get('status'), 
        createdOn: formData.get('created_on'), 
        deadline: formData.get('deadline'),
        finishedOn: formData.get('finished_on')
    }

    await fetch(`${URL}/projects`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdProject)
    })

    return redirect('/')
}

//added this new deleteAction funciton
export const deleteAction = async ({params}) => {
    await fetch(`${URL}/project/${params.id}`, {
        method: 'delete'
    });

    return redirect('/')
}