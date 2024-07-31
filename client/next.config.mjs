/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React's strict mode
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/api/:path*", // Proxy to backend
      },
      // Add other rewrites if needed
    ];
  },
  // Add other configurations if needed
};

export default nextConfig;
