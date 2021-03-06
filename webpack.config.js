const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const parts = require('./webpack.parts');


const PATHS = {
  app: path.join( __dirname, 'app' ),
  build: path.join( __dirname, 'build' )
};

const common = merge(
  {
    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    //
    // Entries have to resolve to files! It relies on Node.js
    // convention by default so if a directory contains *index.js*,
    // it will resolve to that.
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    module: {
      loaders: [
        // {
        //   test: /\.html$/,
        //   loader: 'html-loader'
        //   // loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './app')) + '/!html'
        // }
      ]
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin(),
      new HtmlWebpackPlugin( {
        title: 'Campfire',
        template: 'index.ejs',
        meta: [
          {
            name: 'description',
            content: 'A better default template for html-webpack-plugin.'
          }
        ]
      } )
    ]
  }
);


module.exports = function( env ) {
  if ( env === 'production' ) {
    return merge(
      common,
      // parts.htmlLoader(),
      parts.extractCSS(),
      parts.purifyCSS( PATHS.app )
    );
  }

  return merge(
    common,
    // parts.htmlLoader(),
    {
      // Disable performance hints during development
      performance: {
        hints: false
      },
      plugins: [
        new webpack.NamedModulesPlugin()
      ]
    },

    parts.loadCSS(),
    parts.devServer({
      // Customize host/port here if needed
      host: process.env.HOST,
      port: process.env.PORT
    })
  );
};
