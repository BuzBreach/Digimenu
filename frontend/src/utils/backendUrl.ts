export const getBackendUrl = () => {
  const configured = (process.env.NEXT_PUBLIC_BACKEND_URL || '').trim().replace(/\/$/, '');
  if (configured) return configured;

  if (typeof window === 'undefined') return '';

  return window.location.origin;
};
