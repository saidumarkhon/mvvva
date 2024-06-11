import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = ({ tasks, onEdit, onDelete }) => (
  <div>
    {tasks.map(task => (
      <div key={task.id} className="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{task.title}</h2>
          <p className={`status-${task.status}`}>{task.status}</p>
        </div>
        <div>
          <IconButton onClick={() => onEdit(task)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={() => onDelete(task.id)}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </div>
      </div>
    ))}
  </div>
);

export default TaskList;
