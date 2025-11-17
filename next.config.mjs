const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // для GitHub Pages + кастомный домен
  output: 'export',
  // basePath и assetPrefix не нужны — сайт будет в корне домена
};

export default nextConfig;
