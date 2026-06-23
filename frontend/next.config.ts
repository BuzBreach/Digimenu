import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next-local",
  outputFileTracingRoot: process.cwd(),
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
