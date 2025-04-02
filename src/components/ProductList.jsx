'use client';

import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  if (products.length === 0) {
    return <p>No hay equipos para mostrar.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
