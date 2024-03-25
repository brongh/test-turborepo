/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  basePath: "/web",
  assetPrefix: "https://test-turborepo-web-five.vercel.app/web",
  beforeFiles: [
    {
      source: "/web",
      destination: "https://test-turborepo-web-five.vercel.app/web",
    },
  ],
};
