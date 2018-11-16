module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: [
        "last 2 versions", 
        "Android >= 4.4",
        "Firefox ESR",
        "not ie < 9",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 6",
        "opera >= 12.1",
        "ios >= 6"
      ]
    })
  ]
};