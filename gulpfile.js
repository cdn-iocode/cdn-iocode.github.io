var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function() {
    gulp.src('./dev/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./prod/assets/tpl_default/css/'))
});