import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    const serverUrl = typeof window !== 'undefined'
      ? ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
          ? window.location.origin.replace(':3000', ':5000')
          : window.location.origin)
      : '';
    
    console.log(`Connecting Socket.IO Client to: ${serverUrl}`);
    
    socket = io(serverUrl, {
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
    });

    socket.on('connect', () => {
      console.log('Socket.IO connected to local server successfully!');
    });

    socket.on('disconnect', (reason) => {
      console.warn(`Socket.IO disconnected. Reason: ${reason}. Auto-reconnecting...`);
    });

    socket.on('connect_error', (error) => {
      console.error('Socket.IO Connection Error:', error.message);
    });
  }
  return socket;
};
