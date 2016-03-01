var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  sass = require('gulp-sass'),
  srcDir = './src/';

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: srcDir
    }
  });
  gulp.watch('./src/**/*.*').on('change', reload);
});

gulp.task('sass', function() {
  return gulp.src(srcDir + 'scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(srcDir + 'css/'));
});

gulp.watch('./src/scss/*.scss', ['sass']);
gulp.task('default', ['server']);

//------------------------------------------------------
//    Practice
//------------------------------------------------------

practiceDir = './practice/';
gulp.task('pserver', function() {
  browserSync.init({
    server: {
      baseDir: practiceDir
    }
  });
  gulp.watch('./practice/**/*.*').on('change', reload);
});

gulp.task('psass', function() {
  return gulp.src(practiceDir + 'scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(practiceDir + 'css/'));
});

gulp.task('watch', function() {
  gulp.watch('./practice/scss/*.scss', ['psass']);
});
// gulp.watch('./practice/scss/*.scss', ['psass']);
gulp.task('practice', ['pserver', 'watch']);
