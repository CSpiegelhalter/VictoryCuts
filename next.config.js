const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = [
withBundleAnalyzer({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.optimization.minimizer = [];
       config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
    return config;
  },
})
]
