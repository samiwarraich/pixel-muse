/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["colorgradient.vercel.app"],
  },
};

module.exports = nextConfig;
