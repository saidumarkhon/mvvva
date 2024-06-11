import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    onAdd(title);
    setTitle('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleAdd} color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTaskModal;
