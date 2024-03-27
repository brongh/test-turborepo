/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  basePath: process.env.APPLICATION_BASE_PATH,
  assetPrefix: `${process.env.APPLICATION_DOMAIN}${process.env.APPLICATION_BASE_PATH}`,
  beforeFiles: [
    {
      source: process.env.APPLICATION_BASE_PATH,
      destination: `${process.env.APPLICATION_DOMAIN}${process.env.APPLICATION_BASE_PATH}`,
    },
  ],
};
