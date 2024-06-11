import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import TaskColumn from '@components/AddTaskPage/TaskColumn';
import AddTaskModal from '@components/AddTaskPage/AddTaskModal';
import EditTaskModal from '@components/AddTaskPage/EditTaskModal';
import 'tailwindcss/tailwind.css';

const initialTasks = [
  { id: nanoid(), title: 'Task 1', status: 'open' },
  { id: nanoid(), title: 'Task 2', status: 'pending' },
  { id: nanoid(), title: 'Task 3', status: 'inprog' },
  { id: nanoid(), title: 'Task 4', status: 'complete' }
];

const statuses = ['open', 'pending', 'inprog', 'complete'];

function AddTask() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('open');
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (title) => {
    setTasks([...tasks, { id: nanoid(), title, status: currentStatus }]);
  };

  const editTask = (id, title, status) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, title, status } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const openAddModal = (status) => {
    setCurrentStatus(status);
    setAddModalOpen(true);
  };
  const closeAddModal = () => setAddModalOpen(false);

  const openEditModal = (task) => {
    setCurrentTask(task);
    setEditModalOpen(true);
  };
  const closeEditModal = () => setEditModalOpen(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Task Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statuses.map(status => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter(task => task.status === status)}
            onAdd={() => openAddModal(status)}
            onEdit={openEditModal}
            onDelete={deleteTask}
          />
        ))}
      </div>
      <AddTaskModal isOpen={isAddModalOpen} onClose={closeAddModal} onAdd={addTask} />
      {currentTask && (
        <EditTaskModal isOpen={isEditModalOpen} onClose={closeEditModal} task={currentTask} onEdit={editTask} />
      )}
    </div>
  );
}

export default AddTask;