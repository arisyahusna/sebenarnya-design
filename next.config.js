
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/sebenarnya-design",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
