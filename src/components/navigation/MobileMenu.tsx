import { Search, X } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import { navItems } from '../../data/mockContent';
import { isVogueUserLoggedIn, subscribeToVogueAuthChange } from '../../utils/authState';
import { navigateTo, routePath } from '../../utils/routes';
import '../../styles/components.css';

type MobileMenuProps = {
  open?: boolean;
  onClose: () => void;
};

export function MobileMenu({ open = false, onClose }: MobileMenuProps) {
  const [loggedIn, setLoggedIn] = useState(isVogueUserLoggedIn);

  useEffect(() => subscribeToVogueAuthChange(() => setLoggedIn(isVogueUserLoggedIn())), []);

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
    navigateTo('/busqueda');
  };

  const visibleNavItems = loggedIn ? [...navItems, { label: 'Comunidad Vogue', href: routePath('/comunidad') }] : navItems;

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
        {visibleNavItems.map((item) => (
          <a href={routePath(item.href)} key={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}
      </nav>
      <hr />
    </aside>
  );
}
