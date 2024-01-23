/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  async redirects() {
    return [{
      source: '/',
      destination: '/board/1',
      permanent: true
    }]
  },
}

module.exports = nextConfig
