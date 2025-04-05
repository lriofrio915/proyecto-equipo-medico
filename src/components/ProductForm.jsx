'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductForm() {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    model: '',
    category: '',
    condition: '',
    image: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem('productos')) || [];
    const updated = [...stored, form];
    localStorage.setItem('productos', JSON.stringify(updated));

    alert('Equipo registrado (guardado en localStorage)');
    router.push('/'); // Redirección automática al home
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
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

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Registrar equipo
      </button>
    </form>
  );
}
