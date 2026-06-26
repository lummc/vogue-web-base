const AUTH_KEY = 'vogue-community-auth';

export function isVogueUserLoggedIn() {
  return window.localStorage.getItem(AUTH_KEY) === 'true';
}

export function setVogueUserLoggedIn(value: boolean) {
  if (value) {
    window.localStorage.setItem(AUTH_KEY, 'true');
    return;
  }

  window.localStorage.removeItem(AUTH_KEY);
}
