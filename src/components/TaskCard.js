// components/TaskCard.js

import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Description: {task.description}</p>
    </div>
  );
};

export default TaskCard;
