/*
 * M* CLIENT / ROOMS
 */

function Rooms(options) {

    this.client = options.client;

}

Rooms.prototype.get = function(query, cb) {

    this.client.emit('rooms:list', query, function(rooms) {

        typeof cb === 'function' && cb(rooms);

    });

}

Rooms.prototype.create = function(room, cb) {

    this.client.emit('rooms:create', room, function(room) {

        typeof cb === 'function' && cb(room);

    });

}

Rooms.prototype.join = function(room, cb) {

    typeof room === 'object' && (room = room.id);

    this.client.emit('rooms:join', room, function(room) {

        typeof cb === 'function' && cb(room);

    });

}

Rooms.prototype.leave = function(room, cb) {

    typeof room === 'object' && (room = room.id);

    this.client.emit('rooms:leave', room, function(room) {

        typeof cb === 'function' && cb(room);

    });

}

module.exports = Rooms;