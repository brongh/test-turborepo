/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  async rewrites() {
    return [
      {
        source: "/web/:slug*",
        destination: "/api/proxy?path=web&slug=:slug*",
      },
    ];
  },
};
