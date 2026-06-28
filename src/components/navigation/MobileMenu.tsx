import { Search, X } from 'lucide-react';
import type { FormEvent } from 'react';
import { navItems } from '../../data/mockContent';
import { navigateTo, routePath } from '../../utils/routes';
import '../../styles/components.css';

type MobileMenuProps = {
  open?: boolean;
  onClose: () => void;
};

export function MobileMenu({ open = false, onClose }: MobileMenuProps) {
  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
    navigateTo('/busqueda');
  };

  return (
    <aside className="mobile-menu" data-open={open} aria-hidden={!open}>
      <button className="icon-button mobile-menu__close" type="button" aria-label="Cerrar menu" onClick={onClose}>
        <X size={28} strokeWidth={1.5} />
      </button>
      <hr />
      <form className="mobile-menu__search" onSubmit={submitSearch}>
        <Search size={34} strokeWidth={1.5} aria-hidden="true" />
        <input aria-label="Buscar" placeholder="BUSCAR..." />
      </form>
      <nav aria-label="Menu mobile">
        {navItems.map((item) => (
          <a href={routePath(item.href)} key={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}
      </nav>
      <hr />
    </aside>
  );
}
