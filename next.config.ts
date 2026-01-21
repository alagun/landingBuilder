import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
  
  /* Если нужно настроить алиасы для импортов */
  // experimental: {
  //   turbo: {
  //     resolveAlias: {
  //       '@': './src',
  //     },
  //   },
  // },
};

export default nextConfig;
