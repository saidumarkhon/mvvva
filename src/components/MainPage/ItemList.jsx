import React from 'react';

const ItemList = ({ items, deleteItem, editItem }) => {
  return (
    <table className="min-w-full bg-slate-400">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Last Name</th>
          <th className="py-2">Age</th>
          <th className="py-2">Gender</th>
          <th className="py-2">Address</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="text-center border-b">
            <td className="py-2">{item.name}</td>
            <td className="py-2">{item.lastName}</td>
            <td className="py-2">{item.age}</td>
            <td className="py-2">{item.gender}</td>
            <td className="py-2">{item.address}</td>
            <td className="py-2">
              <button
                onClick={() => editItem(item)}
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
