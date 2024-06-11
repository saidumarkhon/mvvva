import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem, Select } from '@mui/material';

const EditTaskModal = ({ isOpen, onClose, task, onEdit }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setStatus(task.status);
    }
  }, [task]);

  const handleEdit = () => {
    onEdit(task.id, title, status);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="dense"
        />
        <Select
          label="Status"
          fullWidth
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          margin="dense"
        >
          <MenuItem value="open">Open</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="inprog">In Progress</MenuItem>
          <MenuItem value="complete">Complete</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleEdit} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskModal;
