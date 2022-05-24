// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  i18n: {
    locales: ['en', 'de', 'fr'],
    defaultLocale: 'en',
  },

  rewrites: () => ({
    fallback: [
      {
        source: '/:path*',
        destination: '/:path*/index.html',
      },
    ],
  }),
};

module.exports = withNx(nextConfig);
