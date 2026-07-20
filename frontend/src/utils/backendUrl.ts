export const getBackendUrl = () => {
  const configured = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/\/$/, '');
  if (configured) return configured;

  if (typeof window === 'undefined') return '';

  const { protocol, hostname } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return `${protocol}//${hostname}:5000`;
  }

  return 'http://127.0.0.1:5000';
};
