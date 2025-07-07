/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/TWWWWWWWW.html',
        destination: '/TWWWWWWWW.html',
      },
      {
        source: '/twitter-marketing-plan.html',
        destination: '/twitter-marketing-plan.html',
      }
    ]
  },
}

export default nextConfig
