/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/write",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
