import { Link, useLoaderData, Form } from "react-router-dom";
import React, { useState, useEffect } from 'react';
const URL = process.env.REACT_APP_URL;


 const Landing = () => {
//     // State variables for storing projects, new project title and etc,
    const [projects, setProjects] = useState([]);
    const [newProjectTitle, setNewProjectTitle] = useState('');
    const [newProjectStatus, setNewProjectStatus] = useState('');
    const [newProjectCreatedOn, setNewProjectCreatedOn] = useState('');
    const [newProjectDeadline, setNewProjectDeadline] = useState('');
    const [newFinishedOn, setNewFinishedOn] = useState('');
    // editing project id
    const [editingProjectId, setEditingProjectId] = useState(null);
    // Update project title and etc
    const [updatedProjectTitle, setUpdatedProjectTitle] = useState('');
    const [updatedProjectStatus, setUpdatedProjectStatus] = useState('');
    const [updatedProjectCreatedOn, setUpdatedProjectCreatedOn] = useState('');
    const [updatedProjectDeadline, setUpdatedProjectDeadline] = useState('');
    const [updateFinishedOn, setUpdateFinishedOn] = useState('');

    //Use useEffect to get projects data from the server 
    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch(`${URL}/projects`);
            const data = await response.json();
            setProjects(data);
        };
        getProjects();
    }, []);

    const handleAddProject = async() => {
        
    }
    console.log(projects)

    if(projects.isLoading){
        return <div>Loading...</div>
    }
    return (
        <div>
        <h3>Create a project</h3>
            {/*added */}
            <Form action='/create' method='post'>
                <input type='input' name='name' placeholder="project's name"/>
                <input type='input' name='image' placeholder="project's picture" />
                <input type='input' name='title' placeholder="project's title" />
                <input type='submit' value={'create project'} />
            </Form>
            {/*end added */}

            <h3>People</h3>
            {projects.map(project => {
                return(
                    <div key={project._id} className="project">
                        <Link to={`/${project._id}`}>
                            <h1>{project.project}</h1>
                        </Link>
                        <div className="status">
                        <h4>{project.status}</h4>
                        </div>
                        <div className="created_on_date">
                        <h4>{project.created_on}</h4>
                        </div>
                        <div className="deadline">
                        <h4>{project.deadline}</h4>
                        </div>
                        <div className="finished_on">
                        <h4>{project.finish_on}</h4>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Landing;