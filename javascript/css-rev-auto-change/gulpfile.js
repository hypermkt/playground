var gulp = require('gulp');
var concat = require('gulp-concat');
var rev = require('gulp-rev');

gulp.task('css', function() {
  gulp.src('src/*.css')
     .pipe(concat('all.css'))
     .pipe(rev())
     .pipe(gulp.dest('dest/'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.css', ['css'])
});

gulp.task('default', ['css', 'watch']);
