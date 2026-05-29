import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',          // Tells Next.js to generate the 'out' folder
  basePath: '/khel-portfolio', // Must match your GitHub repository name
  images: {
    unoptimized: true,       // Next.js default image optimization won't work on static hosting
  },
};

export default nextConfig;
