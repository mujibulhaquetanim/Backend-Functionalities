const path = require("path");
const webpack = require("webpack");

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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        STRIPE_API_KEY: process.env.STRIPE_API_KEY, // Inject Stripe API key or other env vars
      }),
    }),
  ],
  mode: "development", // or "production"
};
