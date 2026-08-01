import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    qualities: [75, 80, 90],
  },
  reactCompiler: true,
};

export default nextConfig;
