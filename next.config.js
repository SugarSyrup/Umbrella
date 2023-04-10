/** @type {import('next').NextConfig} */
// const ScrollTrigger = require('gsap/ScrollTrigger');

// const withPlugins = require('next-compose-plugins');
// const withTM = require('next-transpile-modules')([ScrollTrigger])
const withImage = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

// module.exports = withPlugins([withTM], nextConfig);
module.exports = withImage(nextConfig);
