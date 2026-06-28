import { Search } from 'lucide-react';
import type { FormEvent } from 'react';
import '../../styles/components.css';

type SearchInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
};

export function SearchInput({ value = '', onChange, onSearch }: SearchInputProps) {
  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.();
  };

  return (
    <form className="search-page__form" onSubmit={submitSearch}>
      <label className="search-input">
        <button className="search-input__submit" type="submit" aria-label="Buscar">
          <Search size={30} strokeWidth={1.5} />
        </button>
        <span className="visually-hidden">Buscar</span>
        <input placeholder="Buscar" value={value} onChange={(event) => onChange?.(event.target.value)} />
      </label>
      <button type="submit">Buscar</button>
    </form>
  );
}
