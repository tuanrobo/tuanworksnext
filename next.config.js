/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    hostname: 'image.tmdb.org'
  },
  images: {
    remotePatterns: [
      {
        
        hostname: 'image.tmdb.org',
        
      },
    ],
  },
}

module.exports = nextConfig
