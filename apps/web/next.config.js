/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  basePath: "/web",
  assetPrefix: process.env.ASSET_PREFIX || "",
};
