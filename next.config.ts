import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/janithasilva.github.io',
  assetPrefix: '/janithasilva.github.io',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
