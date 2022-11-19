/** @type {import('next').NextConfig} */

/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint no-undef: 0 */

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const withPWA = require('next-pwa')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === 'development' ? false : true,
  // },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
}

const finalConfig = {
  ...withMDX(nextConfig),
  ...nextConfig,
}

module.exports = (phase) => {
  return finalConfig
}

/**
 * 
 * ...withPWA({
    // disable: process.env.NODE_ENV === 'development',
    register: true
  }),
 */
