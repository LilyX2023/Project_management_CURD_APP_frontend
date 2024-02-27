// api/projects.js

const URL = process.env.REACT_APP_URL;

export const getAllProjects = async () => {
    const response = await fetch(`${URL}`);
    const projects = await response.json();
    return projects;
}

export const getProjectById = async (projectId) => {
    const response = await fetch(`${URL}/${projectId}`);
    const project = await response.json();
    return project;
}

export const deleteProjectById = async (projectId) => {
    const response = await fetch(`${URL}/projects/${projectId}`, {
        method: 'DELETE'
    });
    return response.ok;
}

// Add other API functions as needed
