/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
  pageExtensions: ["jsx", "js", "mdx"],
  images: {
    domains: ['cdn.sanity.io'],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


module.exports = withBundleAnalyzer(nextConfig);
