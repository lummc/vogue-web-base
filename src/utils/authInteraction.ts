import { isVogueUserLoggedIn } from './authState';

const AUTH_REQUIRED_EVENT = 'vogue-auth-required';

export function requireVogueAuth(action: () => void) {
  if (isVogueUserLoggedIn()) {
    action();
    return true;
  }

  window.dispatchEvent(new Event(AUTH_REQUIRED_EVENT));
  return false;
}

export function subscribeToAuthRequired(callback: () => void) {
  window.addEventListener(AUTH_REQUIRED_EVENT, callback);
  return () => window.removeEventListener(AUTH_REQUIRED_EVENT, callback);
}
