'use client';

import { useState, useEffect } from 'react';

export default function EditProductModal({ product, index, onClose, onSave }) {
  const [form, setForm] = useState(product);

  useEffect(() => {
    setForm(product);
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(index, form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Editar Equipo</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries(form).map(([key, value]) => (
            <input
              key={key}
              name={key}
              value={value}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
          ))}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
