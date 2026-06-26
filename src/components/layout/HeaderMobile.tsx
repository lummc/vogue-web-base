import { Menu, Search } from 'lucide-react';
import '../../styles/components.css';

export function HeaderMobile() {
  return (
    <header className="mobile-header">
      <button className="icon-button" aria-label="Abrir menu">
        <Menu size={28} strokeWidth={1.5} />
      </button>
      <div className="mobile-header__brand">VOGUE</div>
      <button className="icon-button" aria-label="Buscar">
        <Search size={28} strokeWidth={1.5} />
      </button>
    </header>
  );
}
