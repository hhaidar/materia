'use strict';

+function() {

function Client

var socket = require('socket.io-client')('', {
    query: {
        token: ''
    }
});

socket.on('connect', function(res) {
    socket.emit('rooms:list', function(rooms) {
        console.log('ROOMS')
        console.log(rooms);
    });
})

socket.on('error', function(err) {
    console.log(err)
})

socket.on('disconnect', function(res) {
    console.log(res)
})

socket.on('message', function(res) {
    console.log('message')
})

}
