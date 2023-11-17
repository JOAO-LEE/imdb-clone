/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      port: "",
      hostname:  "image.tmdb.org",
      pathname: "/t/p/original/**"

    }]
  }
}

module.exports = nextConfig
