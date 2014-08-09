var gulp = require('gulp');
var browserify = require('gulp-browserify');

var src = {
  js: 'canvas.js'
};

gulp.task('browserify', function () {
  gulp.src(src.js)
    .pipe(browserify())
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
  gulp.watch(src.js, ['browserify']);
});

gulp.task('default', ['browserify', 'watch']);