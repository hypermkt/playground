// src -> dest

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dest/'));
});

gulp.task('msg', ['html'], function() {
  console.log('html copy done');
});

gulp.task('imgmin', function() {
  gulp.src('./src/img/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('./dest/img/'));
});

gulp.task('js', function() {
  gulp.src('./bower_components/**/*.js')
     .pipe(concat('vendor.js'))
     .pipe(uglify())
     .pipe(header())
     .pipe(gulp.dest('./dest/js/'))
});

gulp.task('default', ['msg', 'imgmin', 'js']);
