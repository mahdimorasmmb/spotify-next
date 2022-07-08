/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
