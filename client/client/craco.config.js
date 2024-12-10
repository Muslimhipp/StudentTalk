module.exports = {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
      webpack: {
        configure: (webpackConfig) => {
          webpackConfig.resolve.fallback = {
            ...webpackConfig.resolve.fallback,
            path: false,
          };
          return webpackConfig;
        },
      },
  };