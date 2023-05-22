/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["pixel-muse.vercel.app"],
  },
};

module.exports = nextConfig;
