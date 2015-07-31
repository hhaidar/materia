'use strict';

var Reflux = require('reflux');

module.exports = function(client, db) {

    return Reflux.createStore({

        init: function() {

            client.on('connect', this.fetchRooms);

        },

        getInitialState: function() {

            return [];
  
        },

        fetchMessages: function() {

        }

    });

};