import { X } from 'lucide-react';
import { navItems } from '../../data/mockContent';
import '../../styles/components.css';

export function MobileMenu({ open = false }: { open?: boolean }) {
  return (
    <aside className="mobile-menu" data-open={open}>
      <button className="icon-button" aria-label="Cerrar menu">
        <X size={28} strokeWidth={1.5} />
      </button>
      <nav aria-label="Menu mobile">
        {navItems.map((item) => (
          <a href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}
