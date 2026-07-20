export const getBackendUrl = () => {
  const configured = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/\/$/, '');
  if (configured) return configured;

  if (typeof window === 'undefined') return '';

  const { protocol, hostname } = window.location;
  const isLocalHost =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    /^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname) ||
    /^192\.168\.\d{1,3}\.\d{1,3}$/.test(hostname) ||
    /^172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}$/.test(hostname);

  if (isLocalHost) {
    return `${protocol}//${hostname}:5000`;
  }

  return window.location.origin;
};

export const apiUrl = (path: string) => {
  if (/^https?:\/\//i.test(path)) return path;

  const base = getBackendUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return base ? `${base}${normalizedPath}` : normalizedPath;
};
