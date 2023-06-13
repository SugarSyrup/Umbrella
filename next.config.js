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
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: `http://ec2-3-39-93-217.ap-northeast-2.compute.amazonaws.com:8800/:path*`,
  //     },
  //   ];
  // },
}

// module.exports = withPlugins([withTM], nextConfig);
module.exports = withImage(nextConfig);
