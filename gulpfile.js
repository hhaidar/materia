'use strict';

var gulp = require('gulp'),
    electron = require('electron-connect').server.create();

gulp.task('default', function () {

    electron.start();

    gulp.watch('index.js', electron.restart);

    gulp.watch(['app.js', 'app.html'], electron.reload);

});