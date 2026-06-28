import { CircleUserRound, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '../../data/mockContent';
import { isVogueUserLoggedIn, subscribeToVogueAuthChange } from '../../utils/authState';
import { routePath } from '../../utils/routes';
import { ProfileDrawer } from './ProfileDrawer';
import '../../styles/components.css';

export function HeaderDesktop() {
  const [loggedIn, setLoggedIn] = useState(isVogueUserLoggedIn);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(
    () =>
      subscribeToVogueAuthChange(() => {
        setLoggedIn(isVogueUserLoggedIn());
      }),
    [],
  );

  useEffect(() => {
    if (!profileOpen) {
      return undefined;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProfileOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [profileOpen]);

  return (
    <header className="site-header">
      <a className="site-header__brand" href={routePath('/')} aria-label="Vogue Mexico home">
        <span>VOGUE</span>
        <small>Mexico y Latinoamerica</small>
      </a>
      <div className="site-header__actions">
        <button
          className="icon-button icon-button--account"
          type="button"
          aria-label="Cuenta de usuario"
          aria-expanded={profileOpen}
          onClick={() => setProfileOpen(true)}
        >
          <CircleUserRound size={45} strokeWidth={1.35} />
        </button>
        <a className="icon-button icon-button--search" href={routePath('/busqueda')} aria-label="Buscar">
          <Search size={39} strokeWidth={1.45} />
        </a>
      </div>
      <nav className="desktop-nav" aria-label="Principal">
        {navItems.map((item) => (
          <a href={routePath(item.href)} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <hr className="section-rule" />
      {profileOpen ? <ProfileDrawer loggedIn={loggedIn} onClose={() => setProfileOpen(false)} /> : null}
    </header>
  );
}
