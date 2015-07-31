'use strict';

var Reflux = require('reflux'),
    PouchDB = require('pouchdb');

var settings = require('../settings');

var Client = require('../client');

var RoomActions = require('../actions/room');

var db = new PouchDB('materia'),
    client = new Client({
        url: settings.url,
        token: settings.token
    }).connect();

module.exports = Reflux.createStore({

    listenables: [
        RoomActions
    ],

    init: function() {

        client.on('connect', this.fetchRooms);

        db.get('rooms').then(function(doc) {
            this.state = doc.rooms;
            this.trigger(this.state);
        }.bind(this)).catch(function (err) {
            console.error(err);
        });

    },

    getInitialState: function() {

        return [];

    },

    onSwitchRoom: function(id) {
        console.log(id);
    },

    fetchRooms: function() {

        client.rooms.get({
            users: true
        }, function(rooms) {

            this.state = rooms;

            this.trigger(this.state);

            db.put({
                _id: 'rooms',
                rooms: this.state
            });

        }.bind(this));

    }

});
