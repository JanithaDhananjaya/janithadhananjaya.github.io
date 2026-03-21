import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/JanithaSilva.github.io',
  // assetPrefix: '/JanithaSilva.github.io',
  // trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
