'use strict';

var React = require('react'),
    fs = require('fs'),
    yaml = require('js-yaml'),
    PouchDB = require('pouchdb'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    HashLocation = Router.HashLocation;

var Client = require('./lib/client');

var settings = yaml.safeLoad(fs.readFileSync('settings.yml', 'utf8'));

var client = new Client({
    url: settings.url,
    token: settings.token
}).connect();

var db = new PouchDB('materia');

var stores = {
    room: require('./lib/stores/room')(client, db)
};

var App = require('./lib/components/app')(stores),
    Room = require('./lib/components/room')(stores),
    RoomsList = require('./lib/components/roomsList')(stores);

Router.run(
    <Route handler={App}>
        <Route path="/" handler={Room} />
    </Route>,
    HashLocation,
    function(Root) {
        React.render(<Root/>, document.body);
    }
);