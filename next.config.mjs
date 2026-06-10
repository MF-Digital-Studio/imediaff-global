/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/events',
        permanent: false,
      },
      {
        source: '/case-studies/:path*',
        destination: '/events',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
