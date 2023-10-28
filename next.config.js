/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "pixel-muse.vercel.app" }],
  },
};

module.exports = nextConfig;
