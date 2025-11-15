const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // то, что у тебя уже было
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // нужно для GitHub Pages
  output: 'export',                    // статический экспорт в /out
  basePath: isProd ? '/TeleCode' : '', // имя репозитория
  assetPrefix: isProd ? '/TeleCode/' : '',
};

export default nextConfig;
