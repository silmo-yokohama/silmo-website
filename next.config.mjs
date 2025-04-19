/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.newt.so"], // NewtのCDNドメインを許可
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  experimental: {
    optimizeCss: true, // CSSの最適化
  },
};

export default nextConfig;
