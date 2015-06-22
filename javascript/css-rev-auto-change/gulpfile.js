var gulp = require('gulp');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');

gulp.task('css', function() {
  gulp.src('src/*.css')
     .pipe(concat('all.css'))
     .pipe(rev())
     .pipe(rev.manifest())
     .pipe(gulp.dest('dest/'));
});

gulp.task("revreplace", ["css"], function(){
  var manifest = gulp.src("./dest/rev-manifest.json");

  return gulp.src("src/index.html")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest("./"));
});

gulp.task('watch', function() {
  gulp.watch('src/*.css', ['css', 'revreplace'])
});

gulp.task('default', ['css', 'revreplace', 'watch']);
