// pages/index.js

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const URL = process.env.REACT_APP_URL

const Landing = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectDueDate, setNewProjectDueDate] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${URL}/projects`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const handleAddProject = async () => {
    try {
      const response = await fetch(`${URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: newProjectTitle,
          dueDate: newProjectDueDate
        })
      });
      const data = await response.json();
      setProjects([...projects, data]);
      setNewProjectTitle('');
      setNewProjectDueDate('');
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await fetch(`${URL}/projects/${id}`, {
        method: 'DELETE'
      });
      setProjects(projects.filter(project => project._id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div>
      <h1>Projects</h1>
      <div>
        <input
          type="text"
          placeholder="Project Name"
          value={newProjectTitle}
          onChange={(e) => setNewProjectTitle(e.target.value)}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={newProjectDueDate}
          onChange={(e) => setNewProjectDueDate(e.target.value)}
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>
      <div>
        {projects.map(project => (
          <div key={project._id}>
            <Link to={`/projects/${project._id}`}>{project.name}</Link>
            <button onClick={() => handleDeleteProject(project._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
