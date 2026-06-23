import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    // Dynamically connect to the host's IP on port 5000 (express backend)
    // This allows seamless local network connection out-of-the-box!
    const serverUrl = typeof window !== 'undefined'
      ? `http://${window.location.hostname}:5000`
      : 'http://localhost:5000';
    
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
