const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-html-minifier-terser');
const htmlclean = require('gulp-htmlclean');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');

// minify js
gulp.task('compress', () =>
  gulp
    .src(['./public/**/*.js', '!./public/**/*.min.js'])
    .pipe(terser())
    .pipe(gulp.dest('./public'))
);

// css
gulp.task('minify-css', () => {
  return gulp
    .src('./public/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', () => {
  return gulp
    .src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(
      htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      })
    )
    .pipe(gulp.dest('./public'));
});

gulp.task('minify-images', async () => {
  gulp
    .src('./public/img/**/*.*')
    .pipe(
      imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: false,
        multipass: false,
      })
    )
    .pipe(gulp.dest('./public/img'));
});

// 執行 gulp 命令時執行的任務
gulp.task('default', gulp.parallel('compress', 'minify-css', 'minify-html'));
