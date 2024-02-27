// pages/TaskDetail.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`${URL}/tasks/${taskId}`);
        const data = await response.json();
        setTask(data);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };
    fetchTask();
  }, [taskId]);

  const handleDeleteTask = async () => {
    try {
      await fetch(`${URL}/tasks/${taskId}`, {
        method: 'DELETE',
      });
      // Redirect to the project detail page after deletion
      window.location.href = `/projects/${task.projectId}`;
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      {task ? (
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button onClick={handleDeleteTask}>Delete Task</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Link to={`/projects/${task.projectId}`}>Back to Project</Link>
    </div>
  );
};

export default TaskDetail;

