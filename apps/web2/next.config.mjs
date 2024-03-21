/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  basePath: "/web2",
  assetPrefix: "/web/",
};

export default nextConfig;
