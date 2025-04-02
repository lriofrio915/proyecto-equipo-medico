"use client"

import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Buscar Equipos</h1>
      <SearchBar value={search} onChange={setSearch} />
      <p>Buscando: <strong>{search}</strong></p>
    </div>
  );
}
