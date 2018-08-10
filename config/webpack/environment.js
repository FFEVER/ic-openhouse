const { environment } = require('@rails/webpacker')
const customConfig = require('./custom')

const webpack = require('webpack')
environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))

// Take the assets stored in node_modules packages
const sassLoader      = environment.loaders.get('sass');
const findSassLoader  = loader => (loader === 'sass-loader' || loader.loader === 'sass-loader');
const sassLoaderIndex = sassLoader.use.findIndex(findSassLoader);

sassLoader.use.splice(sassLoaderIndex, 0, {
  loader: 'resolve-url-loader',
});

// Set nested object prop using path notation
environment.config.set('resolve.extensions', ['.foo', '.bar'])
environment.config.set('output.filename', '[name].js')

// Merge custom config
environment.config.merge(customConfig)

// Delete a property
environment.config.delete('output.chunkFilename')

module.exports = environment
