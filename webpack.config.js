module.exports = {
  entry: './src/index.js',
  output:{
    filename: 'main.js',
  },
  mode: 'development',
  module:{
    rules:[
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options:{
          //   presets: ['@babel/preset-env'],
          //   plugins: [
          //     [
          //       '@babel/plugin-transform-runtime',
          //       {
          //         "corejs": 3,
          //         "helpers": true,
          //         "regenerator": true,
          //         "useESModules": false
          //       }
          //     ]
          //   ]
          // }
        }
      }
    ]
  }
}