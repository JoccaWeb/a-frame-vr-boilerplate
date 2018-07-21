// no need to configure entry point and output unless you want to customize further
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

  // only added to make webpack-serve see that dev mode is on
  mode: 'production',

  module: {
    rules: [
      
      {
        // loading Babel for ES6 and React and support .jsx as well
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      },     

    ]
  },

  plugins: [

    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }), 

  ]
};