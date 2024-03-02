const URL = process.env.REACT_APP_URL;

export const projectsLoader = async () => {
    const response = await fetch (`${URL}/projects`);
    const projects = await response.json();
    return projects;
}

export const projectLoader = async ({params}) => {
    const response = await fetch(`${URL}/projects/${params.id}`)
    const data = await response.json()
    return data
}

export const taskLoader = async ({params}) => {
    const response = await fetch(`${URL}/projects/tasks/${params.id}`)
    const data = await response.json()
    return data[0]
}