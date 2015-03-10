/*
 * M* CLIENT
 */

var socket = require('socket.io-client');

function Client(options) {

    this.io = socket(options.url, {
        autoConnect: false,
        reconnect: true,
        query: {
            token: options.token
        }
    });

    return this;

}

Client.prototype.on = function(event, cb) {

    this.io.on(event, cb);

}

Client.prototype.connect = function() {

    this.io.connect();

}

Client.prototype.disconnect = function() {

    this.io.disconnect();

}

module.exports = Client;