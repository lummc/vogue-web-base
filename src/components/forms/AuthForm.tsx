import '../../styles/components.css';

export function AuthForm({ mode = 'registro' }: { mode?: 'login' | 'registro' }) {
  return (
    <form className="auth-form">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Contrasena" />
      <button className="primary-button" type="button">
        {mode === 'login' ? 'Ingresar' : 'Registrarme'}
      </button>
    </form>
  );
}
