'use client';

import { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import ProductList from '@/components/ProductList';
import baseProducts from '@/data/products';
import EditProductModal from '@/components/EditProductModal';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [search, setSearch] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('productos')) || [];
    setAllProducts([...baseProducts, ...stored]);
  }, []);

  const handleDelete = (index) => {
    const baseLength = baseProducts.length;
    if (index >= baseLength) {
      const updated = [...allProducts];
      updated.splice(index, 1);
      setAllProducts(updated);
      const userProducts = updated.slice(baseLength);
      localStorage.setItem('productos', JSON.stringify(userProducts));
    } else {
      alert('No se puede eliminar un producto base.');
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingProduct(allProducts[index]);
  };

  const handleSave = (index, updatedProduct) => {
    const updated = [...allProducts];
    updated[index] = updatedProduct;
    setAllProducts(updated);
    const userProducts = updated.slice(baseProducts.length);
    localStorage.setItem('productos', JSON.stringify(userProducts));
  };

  const filtered = allProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Alquiler de Equipos Médicos</h1>
      <div className="flex items-center justify-between mb-4">
        <SearchBar value={search} onChange={setSearch} />
        <button
          onClick={() => router.push('/register')}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Agregar Producto
        </button>
      </div>

      <ProductList
        products={filtered}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {editingProduct && (
        <EditProductModal
          index={editingIndex}
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
