/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/messages/next-image-unconfigured-host прочитай для images
  images: {
    domains: ["fakestoreapi.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
