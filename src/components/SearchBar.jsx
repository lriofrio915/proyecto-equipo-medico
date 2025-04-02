export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar equipo..."
      className="border p-2 w-full mb-4 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
