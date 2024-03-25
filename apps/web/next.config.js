/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  basePath: "/web",
  assetPrefix: process.env.ASSET_PREFIX || "",
  beforeFiles: [
    {
      source: "/web",
      destination: "https://test-turborepo-web-five.vercel.app/web",
    },
  ],
};
