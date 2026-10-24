
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },

  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

    async rewrites () {
      return [
        {
          source:"/api/:path*",
          destination: `${process.env.API_URL}/api/:path*`
        }
      ]
    }
};

export default nextConfig;
