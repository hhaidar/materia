'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    electron = require('electron-connect').server.create();

gulp.task('default', function () {

    electron.start();

    gulp.run(['sass']);

    gulp.watch('./assets/sass/**/*.scss', ['sass'])

    gulp.watch('index.js', electron.restart);

    gulp.watch(['app.js', 'app.html'], electron.reload);

});

gulp.task('sass', function () {
    gulp.src('./assets/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});