export const routePath = (path: string) => {
  if (path.startsWith('#')) {
    return path;
  }

  if (!path || path === '/') {
    return '#/';
  }

  return `#/${path.replace(/^\/+/, '')}`;
};

export const readRoutePath = () => {
  const hashPath = window.location.hash.replace(/^#/, '');

  if (hashPath) {
    return hashPath.startsWith('/') ? hashPath : `/${hashPath}`;
  }

  return '/';
};

export const navigateTo = (path: string, replace = false) => {
  const next = routePath(path);

  if (replace) {
    window.location.replace(next);
    return;
  }

  window.location.href = next;
};
