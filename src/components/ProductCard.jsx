'use client';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow bg-white hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p><strong>Marca:</strong> {product.brand}</p>
      <p><strong>Modelo:</strong> {product.model}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Estado:</strong> {product.condition}</p>
    </div>
  );
}
