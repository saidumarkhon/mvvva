import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const CreateItem = ({ addItem, updateItem, editingItem, closeModal }) => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    age: '',
    gender: '',
    address: '',
  });

  useEffect(() => { 
    if (editingItem) {
      setForm(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim() && form.lastName.trim() && form.age.trim() && form.gender.trim() && form.address.trim()) {
      if (editingItem) {
        updateItem({ ...form });
      } else {
        addItem({ id: nanoid(), ...form });
      }
      setForm({ name: '', lastName: '', age: '', gender: '', address: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        name="gender"
        value={form.gender}
        onChange={handleChange}
        placeholder="Gender"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
        className="border p-2 rounded w-full mb-4"
      />
      <div className="flex justify-end">
        <button type="button" onClick={closeModal} className="bg-gray-500 text-white px-3 py-1 rounded mr-2">
          Cancel
        </button>
        <button type="submit" className="bg-slate-800 text-white px-4 rounded">
          {editingItem ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default CreateItem;
