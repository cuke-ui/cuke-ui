/**
 * @name gulpfile.js 
 * @description 打包项目css依赖 
 * 参考 ${name} 
 * https://github.com/JeromeLin/${name}/blob/dev/scripts/gulp/gulpfile.js
 */

const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const size = require('gulp-filesize');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const {name} = require('../package.json')
const browserList = [
    "last 2 versions", "Android >= 4.0","Firefox ESR","not ie < 9"
]

const DIR = {
  less: path.resolve(__dirname, '../components/**/*.less'),
  buildSrc: path.resolve(__dirname, '../components/**/styles.less'),
  lib: path.resolve(__dirname, '../lib'),
  dist: path.resolve(__dirname, '../dist'),
};

gulp.task('copyLess', () => {
  return gulp.src(DIR.less)
    .pipe(gulp.dest(DIR.lib));
});

gulp.task('dist', () => {
  return gulp.src(DIR.buildSrc)
    .pipe(sourcemaps.init())
    .pipe(less({
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer({ browsers: browserList }))
    .pipe(concat(`${name}.css`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))
    .pipe(sourcemaps.write())
    .pipe(rename(`${name}.css.map`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))

    .pipe(cssnano())
    .pipe(concat(`${name}.min.css`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist))
    .pipe(sourcemaps.write())
    .pipe(rename(`${name}.min.css.map`))
    .pipe(size())
    .pipe(gulp.dest(DIR.dist));
});

gulp.task('default', ['copyLess', 'dist']);