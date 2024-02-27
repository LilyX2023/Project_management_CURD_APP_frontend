// components/ProjectCard.js

import React from 'react';

const ProjectCard = ({ project, onDelete }) => {
  return (
    <div className="project-card">
      <h2>{project.name}</h2>
      <p>Due Date: {project.dueDate}</p>
      <button onClick={() => onDelete(project._id)}>Delete</button>
    </div>
  );
};

export default ProjectCard;

