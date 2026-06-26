import { Search } from 'lucide-react';
import '../../styles/components.css';

export function SearchInput() {
  return (
    <label className="search-input">
      <Search size={22} strokeWidth={1.5} />
      <span className="visually-hidden">Buscar</span>
      <input placeholder="Buscar" />
    </label>
  );
}
