module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: ["last 2 versions", "Android >= 4.0","Firefox ESR","not ie < 9"]
    })
  ]
};