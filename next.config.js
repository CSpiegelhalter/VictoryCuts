const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.optimization.minimizer = [];
       config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
    return config;
  }

}
