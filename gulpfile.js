var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  sass = require('gulp-sass'),
  srcDir = './src/';

  gulp.task('server', function () {
    browserSync.init({
      server: {baseDir: srcDir}
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
