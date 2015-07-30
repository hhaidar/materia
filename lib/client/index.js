/*
 * M* CLIENT
 */

var socket = require('socket.io-client');

var Rooms = require('./rooms'),
    Messages = require('./messages');

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

    this.messages = new Messages({
        client: this
    });

    return this;

}

Client.prototype.on = function(event, cb) {

    this.io.on(event, cb);

    return this;

}

Client.prototype.emit = function(event, arg1, arg2) {

    this.io.emit(event, arg1, arg2);

    return this;

}

Client.prototype.connect = function() {

    this.io.connect();

    return this;

}

Client.prototype.disconnect = function() {

    this.io.disconnect();

}

module.exports = Client;