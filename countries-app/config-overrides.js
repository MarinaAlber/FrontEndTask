module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: "sass-loader", // compiles Sass to CSS
        options: {
            additionalData: `@import "./src/styles/base/_variables.scss";`,
         
        },
      },
    ],
  });

  return config;
};
