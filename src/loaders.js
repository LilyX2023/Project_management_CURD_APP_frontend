const URL = process.env.REACT_APP_URL;

export const projectsLoader = async () => {
    const response = await fetch (`${URL}/projects`);
    const projects = await response.json();
    return projects;
}

export const projectLoader = async ({params}) => {
    const response = await fetch(`${URL}/project/${params.id}`);
    const project = await response.json();
    return project;
}