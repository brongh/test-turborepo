/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  basePath: "/web2",
  assetPrefix: "https://test-turborepo-web2.vercel.app/web2",
  beforeFiles: [
    {
      source: "/web2",
      destination: "https://test-turborepo-web2.vercel.app/web2",
    },
  ],
};

export default nextConfig;
