'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import ProductList from '@/components/ProductList';
import productsData from '@/data/products';

export default function Home() {
  const [search, setSearch] = useState('');

  const filtered = productsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Buscar Equipos Médicos</h1>
      <SearchBar value={search} onChange={setSearch} />
      <ProductList products={filtered} />
    </div>
  );
}
