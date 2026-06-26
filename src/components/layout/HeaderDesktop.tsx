import { CircleUserRound, Search } from 'lucide-react';
import { navItems } from '../../data/mockContent';
import { isVogueUserLoggedIn } from '../../utils/authState';
import '../../styles/components.css';

export function HeaderDesktop() {
  const accountHref = isVogueUserLoggedIn() ? '/comunidad' : '/registro';

  return (
    <header className="site-header">
      <a className="site-header__brand" href="/" aria-label="Vogue Mexico home">
        <span>VOGUE</span>
        <small>Mexico y Latinoamerica</small>
      </a>
      <div className="site-header__actions">
        <a className="icon-button icon-button--account" href={accountHref} aria-label="Cuenta de usuario">
          <CircleUserRound size={45} strokeWidth={1.35} />
        </a>
        <button className="icon-button icon-button--search" type="button" aria-label="Buscar">
          <Search size={39} strokeWidth={1.45} />
        </button>
      </div>
      <nav className="desktop-nav" aria-label="Principal">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <hr className="section-rule" />
    </header>
  );
}
