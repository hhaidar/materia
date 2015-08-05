'use strict';

var Reflux = require('reflux'),
    PouchDB = require('pouchdb');

var Client = require('../client');

var RoomActions = require('../actions/room');

module.exports = Reflux.createStore({

    listenables: [
        RoomActions
    ],

    init: function() {

        this.conversations = {};

    },

    getInitialState: function() {

        return {
            current: {},
            joined: []
        };

    },

    onSwitchCompleted: function(room) {

        this.conversations.current = room;

        this.trigger(this.conversations);

    }

});
