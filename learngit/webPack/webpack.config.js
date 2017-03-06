var webpack = require('webpack')

module.exports = {
  entry: './initFile.js',//初始化文件
  output: {
    path: __dirname,
    filename: 'bundle.js' // 输出文件
  },
  module: {
    loaders: [ //加载的模块
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}