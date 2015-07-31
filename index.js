'use strict';

var app = require('app'),
    path = require('path'),
    BrowserWindow = require('browser-window');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {

    var file = 'file://' + path.resolve(__dirname, '/app.html');

    mainWindow = new BrowserWindow({
        width: 800, height: 600
    });

    mainWindow.loadUrl(file);

    mainWindow.openDevTools();

    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

});
