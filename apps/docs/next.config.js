/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  async rewrites() {
    return [
      {
        source: "/web/:slug*",
        destination: "/api/proxy?path=web&slug=:slug*",
      },
      {
        source: "/web2/:slug*",
        destination: "/api/proxy?path=web2&slug=:slug*",
      },
    ];
  },
};
