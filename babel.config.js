module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".ios.js", ".android.js", ".js", ".json"],
        root: ["./src"],
        alias: {
          app: "./src",
          assets: "./src/assets",
          components: "./src/components",
          configs: "./src/configs",
          containers: "./src/containers",
          i18n: "./src/i18n",
          navigation: "./src/navigation",
          services: "./src/services",
          stores: "./src/stores",
          themes: "./src/themes",
          utils: "./src/utils",
        },
      },
    ],
  ],
};
