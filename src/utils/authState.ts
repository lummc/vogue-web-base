const AUTH_KEY = 'vogue-community-auth';
const AUTH_EVENT = 'vogue-community-auth-change';

export function isVogueUserLoggedIn() {
  return window.localStorage.getItem(AUTH_KEY) === 'true';
}

export function setVogueUserLoggedIn(value: boolean) {
  if (value) {
    window.localStorage.setItem(AUTH_KEY, 'true');
  } else {
    window.localStorage.removeItem(AUTH_KEY);
  }

  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function subscribeToVogueAuthChange(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === AUTH_KEY) {
      callback();
    }
  };

  window.addEventListener(AUTH_EVENT, callback);
  window.addEventListener('storage', handleStorage);

  return () => {
    window.removeEventListener(AUTH_EVENT, callback);
    window.removeEventListener('storage', handleStorage);
  };
}
