module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "YutaYamada's Portfolio"; // タイトルを設定
      return args;
    });
  }
}