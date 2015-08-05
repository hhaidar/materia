'use strict';

var Reflux = require('reflux'),
    PouchDB = require('pouchdb');

var Client = require('../client');

var RoomActions = require('../actions/room');

var db = new PouchDB('materia');

module.exports = Reflux.createStore({

    listenables: [
        RoomActions
    ],

    init: function() {

        RoomActions.load();

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

    onLoadCompleted: function(rooms) {

        this.state = rooms;

        this.trigger(this.state);

        db.put({
            _id: 'rooms',
            rooms: this.state
        });

    }

});
