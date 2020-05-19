let gulp = require('gulp');
/** REMOVE ME **/ let replace = require('../../');
/** USE ME **/ // let replace = require('gulp-replace');

gulp.task('replace', function() {
  // Do an in-place replace on file.txt
  return gulp.src('file.txt', { base : './' } )
    .pipe(replace('roof', 'world'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['replace']);
