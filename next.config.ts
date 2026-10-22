import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // The Nauryz Red case study moved when its URL spelling was fixed; old links still land on it.
  async redirects() {
    return [{ source: "/works/nayryz-red", destination: "/works/nauryz-red", permanent: true }];
  },
};

export default nextConfig;
