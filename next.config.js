/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.facebook.com",
      "web.facebook.com",
      "www.pexels.com",
      "links.papareact.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
