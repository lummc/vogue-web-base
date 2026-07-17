const AUTH_KEY = 'vogue-community-auth';
const PROFILE_KEY = 'vogue-community-profile';
const AUTH_EVENT = 'vogue-community-auth-change';

export type VogueUserProfile = {
  name: string;
  country: string;
  sections: string[];
  topics: string[];
};

const defaultProfile: VogueUserProfile = {
  name: 'Fernanda',
  country: 'Argentina',
  sections: ['Moda', 'Belleza', 'Hollywood'],
  topics: ['Cabello', 'Unas'],
};

export function isVogueUserLoggedIn() {
  return window.localStorage.getItem(AUTH_KEY) === 'true';
}

export function setVogueUserLoggedIn(value: boolean) {
  if (value) {
    window.localStorage.setItem(AUTH_KEY, 'true');
    if (!window.localStorage.getItem(PROFILE_KEY)) {
      window.localStorage.setItem(PROFILE_KEY, JSON.stringify(defaultProfile));
    }
  } else {
    window.localStorage.removeItem(AUTH_KEY);
    window.localStorage.removeItem(PROFILE_KEY);
  }

  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function loginVogueUser(profile: Partial<VogueUserProfile> = {}) {
  const nextProfile = {
    ...defaultProfile,
    ...getVogueUserProfile(),
    ...profile,
  };

  window.localStorage.setItem(AUTH_KEY, 'true');
  window.localStorage.setItem(PROFILE_KEY, JSON.stringify(nextProfile));
  window.dispatchEvent(new Event(AUTH_EVENT));
  return nextProfile;
}

export function logoutVogueUser() {
  setVogueUserLoggedIn(false);
}

export function getVogueUserProfile(): VogueUserProfile {
  const stored = window.localStorage.getItem(PROFILE_KEY);

  if (!stored) {
    return defaultProfile;
  }

  try {
    return {
      ...defaultProfile,
      ...JSON.parse(stored),
    };
  } catch {
    return defaultProfile;
  }
}

export function subscribeToVogueAuthChange(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === AUTH_KEY || event.key === PROFILE_KEY) {
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
