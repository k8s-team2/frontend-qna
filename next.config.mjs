/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  basePath: '/qna',
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
