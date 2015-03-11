/*
 * M* CLIENT / MESSAGES
 */

function Messages(options) {

    this.client = options.client;

}

Messages.prototype.get = function(query, cb) {

    this.client.emit('messages:list', query, function(messages) {

        typeof cb === 'function' && cb(messages);

    });

}

Messages.prototype.create = function(message, cb) {

    this.client.emit('messages:create', message, function(message) {

       typeof cb === 'function' && cb(message);

    });

}

module.exports = Messages;