import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    const isProductionRuntime =
      process.env.NODE_ENV === 'production' ||
      process.env.VERCEL === '1' ||
      process.env.VERCEL === 'true' ||
      Boolean(process.env.VERCEL_URL);

    if (isProductionRuntime) {
      return [];
    }

    const backendOrigin = process.env.BACKEND_INTERNAL_URL || 'http://127.0.0.1:5000';

    return [
      {
        source: '/api/:path*',
        destination: `${backendOrigin}/api/:path*`,
      },
      {
        source: '/socket.io/:path*',
        destination: `${backendOrigin}/socket.io/:path*`,
      },
    ];
  },
};

export default nextConfig;
