import { Search } from 'lucide-react';
import type { FormEvent } from 'react';
import '../../styles/components.css';

export function SearchInput() {
  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="search-page__form" onSubmit={submitSearch}>
      <label className="search-input">
        <Search size={30} strokeWidth={1.5} />
        <span className="visually-hidden">Buscar</span>
        <input placeholder="Buscar" />
      </label>
      <button type="submit">Buscar</button>
    </form>
  );
}
