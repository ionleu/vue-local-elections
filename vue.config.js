const themeColor = "#FFFFFF";

module.exports = {
  pwa: {
    name: "Alegeri Mereni",
    themeColor,
    msTileColor: themeColor,
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",
    manifestOptions: {
      start_url: "/?utm_source=pwa",
      display: "standalone",
      theme_color: themeColor,
      background_color: themeColor,
      orientation: "portrait",
    },
  },
};
