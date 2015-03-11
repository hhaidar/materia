/*
 * M* CLIENT
 */

var socket = require('socket.io-client');

var Rooms = require('./rooms');

function Client(options) {

    this.io = socket(options.url, {
        autoConnect: false,
        reconnect: true,
        query: {
            token: options.token
        }
    });

    this.rooms = new Rooms({
        client: this
    });

    return this;

}

Client.prototype.on = function(event, cb) {

    this.io.on(event, cb);

}

Client.prototype.emit = function(event, arg1, arg2) {

    this.io.emit(event, arg1, arg2);

}

Client.prototype.connect = function() {

    this.io.connect();

}

Client.prototype.disconnect = function() {

    this.io.disconnect();

}

module.exports = Client;