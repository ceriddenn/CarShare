const path = require('path')

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  transpilePackages: ['ui', 'tailwindconfig'],
}
module.exports = nextConfig;

