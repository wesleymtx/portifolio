/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Desabilita o trailing slash para compatibilidade com GitHub Pages
  trailingSlash: false,
}

module.exports = nextConfig 