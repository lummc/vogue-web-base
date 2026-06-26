import { Apple, X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { imageMap } from '../data/imageMap';
import { Footer } from '../components/layout/Footer';
import { setVogueUserLoggedIn } from '../utils/authState';
import '../styles/components.css';

export function AuthTemplate({ mode = 'registro' }: { mode?: 'login' | 'registro' }) {
  const [email, setEmail] = useState('fernandaisalbel@gmail.com');
  const [password, setPassword] = useState('12345');

  const completeAuth = () => {
    setVogueUserLoggedIn(true);
    window.location.href = '/';
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    completeAuth();
  };

  return (
    <div className="page-shell auth-page-shell">
      <header className="auth-page-header">
        <a href="/" className="auth-page-header__brand" aria-label="Vogue Mexico home">
          <span>VOGUE</span>
          <small>Mexico y Latinoamerica</small>
        </a>
      </header>
      <main className="auth-page">
        <section className="auth-page__visual" aria-label="Comunidad Vogue">
          <img src={imageMap.articles.camila.hero} alt="Editorial Comunidad Vogue" />
          <div className="auth-page__visual-mark">VOGUE</div>
          <p>La moda es parte de contar quienes somos</p>
        </section>
        <section className="auth-page__panel" aria-labelledby="auth-title">
          <a className="auth-page__close" href="/" aria-label="Cerrar">
            <X size={34} strokeWidth={1.6} />
          </a>
          <p className="auth-page__eyebrow">Comunidad Vogue</p>
          <h1 id="auth-title">{mode === 'login' ? 'Inicia sesion' : 'Crea una nueva cuenta'}</h1>
          <form className="auth-page__form" onSubmit={handleSubmit}>
            <input
              aria-label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
            <input
              aria-label="Contrasena"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Contrasena"
            />
            <button type="submit">{mode === 'login' ? 'Ingresar' : 'Siguiente'}</button>
          </form>
          <div className="auth-page__divider" aria-hidden="true">
            <span />
            <strong>o</strong>
            <span />
          </div>
          <div className="auth-page__socials">
            <button type="button" onClick={completeAuth}>
              <span className="auth-page__google">G</span>
              Registrarse con Google
            </button>
            <button type="button" onClick={completeAuth}>
              <Apple size={50} fill="currentColor" strokeWidth={1.2} />
              Registrarse con Apple
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
