/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`,
  },
  // async rewrites() {
  //   return[{
  //     source:"/api/auth/login",
  //     destination:"",//login api url
  //   },{
  //     source:"/api/auth/signup",
  //     destination:"",//SignUp api url
  //   },{
  //     source:"/api/auth/silent-refresh",
  //     destination:"",//SignUp api url
  //   }]
  // }
}

module.exports = nextConfig
