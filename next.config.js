/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });
    return config;
  },
  staticPageGenerationTimeout: 2000,
};

module.exports = nextConfig;
