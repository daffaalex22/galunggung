/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'galunggung-backend.onrender.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
}

module.exports = nextConfig
