import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { subscribeToVogueAuthChange, isVogueUserLoggedIn } from '../../utils/authState';
import { subscribeToAuthRequired } from '../../utils/authInteraction';
import { routePath } from '../../utils/routes';
import '../../styles/components.css';

export function AuthRequiredPrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => subscribeToAuthRequired(() => setOpen(true)), []);

  useEffect(
    () =>
      subscribeToVogueAuthChange(() => {
        if (isVogueUserLoggedIn()) {
          setOpen(false);
        }
      }),
    [],
  );

  if (!open) {
    return null;
  }

  return (
    <aside className="auth-required-prompt" role="dialog" aria-modal="false" aria-labelledby="auth-required-title">
      <button type="button" aria-label="Cerrar" onClick={() => setOpen(false)}>
        <X size={20} strokeWidth={1.7} />
      </button>
      <p id="auth-required-title">Iniciá sesión para interactuar</p>
      <a href={routePath('/registro')} onClick={() => setOpen(false)}>
        Registrarme
      </a>
    </aside>
  );
}
