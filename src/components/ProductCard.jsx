'use client';

export default function ProductCard({ product, index, onDelete, onEdit }) {
  return (
    <div className="max-w-sm w-full mx-auto border rounded-xl shadow-md bg-white overflow-hidden">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p><span className="font-medium">Marca:</span> {product.brand}</p>
        <p><span className="font-medium">Modelo:</span> {product.model}</p>
        <p><span className="font-medium">Categoría:</span> {product.category}</p>
        <p><span className="font-medium">Estado:</span> {product.condition}</p>

        {onDelete && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => onEdit(index)}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(index)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              Eliminar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
