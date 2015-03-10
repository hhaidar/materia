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
    console.log('connected!')
})

client.on('error', function(err) {
    console.log(err)
})