import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typescript: {
    ignoreBuildErrors: true,
  },
   async headers() {
   return [
     {
        source: '/:path*',
        headers: [
          { key: 'X-Forwarded-Proto', value: 'https' },
          { key: 'X-Forwarded-Host', value: 'intuitus-ads.com' },
        ]
     },
    ];
  },
  reactStrictMode: true,
  output: 'standalone',
};

export default nextConfig;
