var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function () {
  gulp.src('./canvas.js')
    .pipe(browserify())
    .pipe(gulp.dest('./build/canvas.js'));
});

gulp.task('default', ['browserify']);