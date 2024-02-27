// pages/ProjectDetail.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const URL = process.env.REACT_APP_URL

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${URL}/projects/${id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };
    fetchProject();
  }, [id]);

  return (
    <div>
      {project ? (
        <div>
          <h1>{project.name}</h1>
          <h2>Due Date: {project.dueDate}</h2>
          <Link to={`/projects/${id}/tasks`}>View Tasks</Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProjectDetail;