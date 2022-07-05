const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   
  // An entry point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on
  // 
  entry: path.resolve(__dirname, './src/index.js'), 
  // The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.
  //
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包出口
    filename: 'js/[name].js' // 打包完的静态资源文件名
  },
  // loader
  // Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  //While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  // By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production.
  // 
  mode: 'development',
}