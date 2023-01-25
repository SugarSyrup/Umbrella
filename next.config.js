/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
