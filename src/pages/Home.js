// pages/Home.js

import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects, deleteProjectById } from '../api/projects'; 

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDueDate, setNewProjectDueDate] = useState('');

  useEffect(() => {
    getAllProjects()
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteProject = (projectId) => {
    deleteProjectById(projectId)
      .then((success) => {
        if (success) {
          setProjects(projects.filter((project) => project._id !== projectId));
        } else {
          console.error('Failed to delete project');
        }
      })
      .catch((error) => console.error(error));
  };

  const handleAddProject = async () => {
    try {
      const response = await fetch(`${URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: newProjectName,
          dueDate: newProjectDueDate
        })
      });
      if (response.ok) {
        const data = await response.json();
        setProjects([...projects, data]);
        setNewProjectName('');
        setNewProjectDueDate('');
      } else {
        console.error('Failed to add project:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };
  

  return (
    <div>
      <h1>Projects</h1>
      <div>
        <input
          type="text"
          placeholder="Project Name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={newProjectDueDate}
          onChange={(e) => setNewProjectDueDate(e.target.value)}
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} onDelete={handleDeleteProject} />
      ))}
    </div>
  );
};

export default Home;

