/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['courteous-cardinal-229.convex.cloud'],
    remotePatterns: [
      {
        hostname: "adventurous-caiman-790.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
