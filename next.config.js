/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost:3000',
      'placeimg.com'
    ],
  },
}

module.exports = nextConfig
