import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 禁用 ESLint 检查
  },
  typescript: {
    ignoreBuildErrors: true, // 禁用 TypeScript 检查
  }
};

export default nextConfig;
