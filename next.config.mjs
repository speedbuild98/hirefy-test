/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "countries.trevorblades.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
