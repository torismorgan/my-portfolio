import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Renamed paths: old links still land on the right page.
  async redirects() {
    return [
      { source: "/works/nayryz-red", destination: "/works/nauryz-red", permanent: true },
      // the résumé was renamed with the site; old links (and anyone who saved them) still get the current one
      { source: "/oris-morgan-resume.pdf", destination: "/victoria-morgan-resume.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
