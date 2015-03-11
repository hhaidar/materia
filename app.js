'use strict';

require('nw.gui').Window.get().showDevTools()

var fs = require('fs'),
    yaml = require('js-yaml');

var Client = require('./lib/client');

var settings = yaml.safeLoad(fs.readFileSync('settings.yml', 'utf8'));

var client = new Client({
    url: settings.url,
    token: settings.token
});

client.connect();

client.on('connect', function() {

    client.rooms.create({
        name: 'blah',
        slug: 'bleh'
    }, function(room) {

        console.log(room);

    });

    client.rooms.get({ users: true }, function(rooms) {

        console.log(rooms);

        var id = rooms[0].id;

        client.messages.create({
            room: id,
            text: 'blah blah blah'
        }, function(message) {

            console.log(message);

        });

    });

});

client.on('error', function(err) {

    console.log(err);

});