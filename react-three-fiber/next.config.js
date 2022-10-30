/** @type {import('next').NextConfig} */
require('next-transpile-modules')(['three']);

const nextConfig = {
  withTM: true,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
