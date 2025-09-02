/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: "production",
  devtool: false,
  entry: {
    main: "./src/main.cjs",
  },
  optimization: {
    minimize: false,
    moduleIds: 'named',
  },
  output: {
    clean: true,
    filename: "[name].js",
  },
  externalsType: 'module-import',
  externals: [
    'externals0',
    'externals1',
  ],
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["./loader"],
      },
    ],
  },
};

export default config;
