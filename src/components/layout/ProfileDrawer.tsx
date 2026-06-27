import { UserRound, X } from 'lucide-react';
import { imageMap } from '../../data/imageMap';
import { setVogueUserLoggedIn } from '../../utils/authState';
import { navigateTo, routePath } from '../../utils/routes';
import '../../styles/components.css';

type ProfileDrawerProps = {
  loggedIn: boolean;
  onClose: () => void;
};

export function ProfileDrawer({ loggedIn, onClose }: ProfileDrawerProps) {
  const logout = () => {
    setVogueUserLoggedIn(false);
    onClose();
    navigateTo('/');
  };

  return (
    <>
      <button className="profile-drawer-backdrop" type="button" aria-label="Cerrar perfil" onClick={onClose} />
      {loggedIn ? (
        <aside className="community-sidebar profile-drawer" aria-label="Menu de usuario">
          <button className="community-sidebar__close" type="button" aria-label="Cerrar" onClick={onClose}>
            <X size={28} strokeWidth={1.6} />
          </button>
          <h2>
            <UserRound size={28} strokeWidth={1.6} />
            Fernanda
          </h2>
          <nav>
            <a href={routePath('/comunidad')} onClick={onClose}>
              Comunidad vogue
            </a>
            <a href="mailto:hola@vogue.mx" onClick={onClose}>
              Comunicate con nosotros
            </a>
            <button type="button" onClick={logout}>
              Cerrar sesion
            </button>
          </nav>
          <div className="community-sidebar__card">
            <img src={imageMap.articles.camila.hero} alt="Editorial Comunidad Vogue" />
            <span>Bienvenida Fernanda!</span>
          </div>
        </aside>
      ) : (
        <aside className="community-auth-drawer profile-drawer" aria-label="Perfil de usuario">
          <button className="community-auth-drawer__close" type="button" aria-label="Cerrar" onClick={onClose}>
            <X size={28} strokeWidth={1.6} />
          </button>
          <UserRound size={28} strokeWidth={1.6} />
          <hr />
          <a className="community-auth-drawer__button" href={routePath('/registro')} onClick={onClose}>
            Registrarse
          </a>
          <p>
            o <a href={routePath('/login')}>Inicia sesion con una cuenta existente</a>
          </p>
          <div className="community-auth-drawer__card">
            <img src={imageMap.articles.camila.hero} alt="Editorial Comunidad Vogue" />
            <span>VOGUE</span>
          </div>
        </aside>
      )}
    </>
  );
}
