'use strict';

var Reflux = require('reflux');

var Client = require('../client');

var settings = require('../settings');

var client = new Client({
    url: settings.url,
    token: settings.token
}).connect();

var Actions = Reflux.createActions({
    load: { children: [ 'completed' ] },
    switch: { children: [ 'completed' ] },
    join: { children: [ 'completed' ] }
});

Actions.load.listen(function() {

    client.rooms.get({
        users: true
    }, function(rooms) {

        this.completed(rooms);

    }.bind(this));

});

Actions.switch.listen(function(id) {

    client.rooms.join(id, function(room) {

        this.completed(room);

    }.bind(this));

});

module.exports = Actions;