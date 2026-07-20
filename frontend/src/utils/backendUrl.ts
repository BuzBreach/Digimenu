export const getBackendUrl = () => {
  const configured = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/\/$/, '');
  if (configured) return configured;

  if (typeof window === 'undefined') return '';

  const { protocol, hostname, origin } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return `${protocol}//${hostname}:5000`;
  }

  return origin;
};
