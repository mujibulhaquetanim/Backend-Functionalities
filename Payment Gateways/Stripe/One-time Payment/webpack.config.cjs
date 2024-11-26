const path = require("path");
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  entry: "./src/Client.ts", // Your entry file
  output: {
    filename: "Client.js",
    path: path.resolve(__dirname, "public/dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        STRIPE_Publishable_KEY: process.env.STRIPE_Publishable_KEY, // Inject Stripe API key or other env vars
      }),
    }),
  ],
  mode: "development", // or "production"
};
