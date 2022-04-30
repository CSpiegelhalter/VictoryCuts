const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  
    images: {
      formats: ['image/avif', 'image/webp']
    },
  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // config.plugins.push(new OptimizeCSSAssetsPlugin({
    //   cssProcessorOptions: {
    //     map: {
    //       inline: false,
    //       annotation: true,
    //     }
    //   }
    // }))
    // config.plugins.push(new UglifyJsPlugin({
    //   uglifyOptions: {
    //     exclude: /react\.js/,
    //     parallel: true,
    //     cache: true,
    //   },
    // }))


    // if (!isServer) {
    //   config.optimization.splitChunks.cacheGroups = {
    //     ...config.optimization.splitChunks.cacheGroups,
    //     '@sentry': {
    //       test: /[\\/]node_modules[\\/](@sentry)[\\/]/,
    //       name: '@sentry',
    //       priority: 10,
    //       reuseExistingChunk: false,
    //     },
    //   };
    // }

    return config;

  }
})

