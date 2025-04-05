'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">MedEquipos</Link>
        <div className="space-x-4 text-sm">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Inicio</Link>
          <Link href="/register" className="text-gray-700 hover:text-blue-600">Registrar</Link>
        </div>
      </div>
    </nav>
  );
}
