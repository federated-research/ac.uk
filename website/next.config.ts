import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "out",
  output: "export",
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
