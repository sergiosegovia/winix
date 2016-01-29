var gulp          = require('gulp')
var browserSync   = require('browser-sync').create()
var sass          = require('gulp-sass')
var minify        = require('gulp-minify-css')
var concat        = require('gulp-concat')

gulp.task('server', function(){
  browserSync.init({
    server: './dist'
  })

  gulp.watch("./dist/css/*.css").on('change', browserSync.reload);
  gulp.watch("./dist/*.html").on('change', browserSync.reload)
})

gulp.task('sass', function() {
  gulp.src('./src/sass/main.scss')
  .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('watch', function() {
  gulp.watch(['./src/sass/main.scss', './src/sass/**/**/*.scss'], ['sass'])
})

gulp.task('default', ['server', 'watch'])
