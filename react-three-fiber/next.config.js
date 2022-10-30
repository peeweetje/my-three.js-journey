/** @type {import('next').NextConfig} */
require('next-transpile-modules')(['three']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
