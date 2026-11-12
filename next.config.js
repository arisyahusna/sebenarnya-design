/** @type {import('next').NextConfig} */

// GitHub Pages serves the site from /sebenarnya-design, so production builds need that prefix.
// `npm run dev` runs without it, so the local site stays at http://localhost:3000/
const basePath = process.env.NODE_ENV === "production" ? "/sebenarnya-design" : "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,

  // Lets plain <img>/<a>/<video> paths add the same prefix (see lib/basePath.js)
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
