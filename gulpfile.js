const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('sass-files/index.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['**/*.html', '**/*.vue']}))
    .pipe(dest('public'))
}

function watchTask() {
  watch(['./sass-files/**/*.scss', '**/*.html', '**/*.vue'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
