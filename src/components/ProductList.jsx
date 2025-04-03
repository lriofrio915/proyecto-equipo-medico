'use client';

import ProductCard from './ProductCard';

export default function ProductList({ products, onDelete, onEdit }) {
  if (products.length === 0) return <p>No hay equipos para mostrar.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          index={index}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
