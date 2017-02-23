const nodeExternals = require('webpack-node-externals')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      __dirname + '/src',
    ]
  },
  
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader'}
      ]
    }]
  },
  target: 'node', // webpack should compile node compatible code
  externals: [
    nodeExternals(),
  ], // in order to ignore all modules in node_modules folder

};
