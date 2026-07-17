type EngagementKind = 'like' | 'save';

const TOGGLE_KEY = 'vogue-engagement-toggles';
const SHARE_KEY = 'vogue-engagement-shares';

function readRecord(key: string): Record<string, boolean | number> {
  const stored = window.localStorage.getItem(key);

  if (!stored) {
    return {};
  }

  try {
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writeRecord(key: string, value: Record<string, boolean | number>) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function engagementToggleKey(kind: EngagementKind, id: string) {
  return `${kind}:${id}`;
}

export function readEngagementToggle(kind: EngagementKind, id: string) {
  return Boolean(readRecord(TOGGLE_KEY)[engagementToggleKey(kind, id)]);
}

export function writeEngagementToggle(kind: EngagementKind, id: string, value: boolean) {
  const toggles = readRecord(TOGGLE_KEY);
  const key = engagementToggleKey(kind, id);

  if (value) {
    toggles[key] = true;
  } else {
    delete toggles[key];
  }

  writeRecord(TOGGLE_KEY, toggles);
}

export function readShareDelta(id: string) {
  const value = readRecord(SHARE_KEY)[id];
  return typeof value === 'number' ? value : 0;
}

export function incrementShareDelta(id: string) {
  const shares = readRecord(SHARE_KEY);
  const nextValue = readShareDelta(id) + 1;
  shares[id] = nextValue;
  writeRecord(SHARE_KEY, shares);
  return nextValue;
}

export function displayCount(value: number) {
  return new Intl.NumberFormat('es-MX').format(value);
}
