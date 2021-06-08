module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  i18n: {
    locales: ['en_US', 'vi_VN'],
    defaultLocale: 'en_US',
  },
};
