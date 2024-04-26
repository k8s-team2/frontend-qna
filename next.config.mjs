/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: '/qa',
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
