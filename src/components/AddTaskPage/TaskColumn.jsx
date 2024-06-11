import React from 'react';
import TaskList from '@components/AddTaskPage/TaskList';

const TaskColumn = ({ status, tasks, onAdd, onEdit, onDelete }) => (
  <div className="bg-gray-100 p-4 rounded shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold capitalize">{status}</h2>
      <button className="bg-slate-800 text-white px-4 py-2 rounded" onClick={onAdd}>
        Add Task
      </button>
    </div>
    <TaskList tasks={tasks} onEdit={onEdit} onDelete={onDelete} />
  </div>
);

export default TaskColumn;
