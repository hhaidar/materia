'use strict';

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

    client.rooms.get({ users: true }, function(rooms) {

        console.log(rooms);

    });

});

client.on('error', function(err) {

    console.log(err);

});