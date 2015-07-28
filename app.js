'use strict';

require('babel/register');

var React = require('react'),
    Reflux = require('reflux'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager(),
    fs = require('fs'),
    yaml = require('js-yaml'),
    PouchDB = require('pouchdb');

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

var Sidebar = require('./lib/components/sidebar');

var App = React.createClass({

    mixins: [
        Reflux.connect(stores.room, 'rooms')
    ],

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function() {
        return (
            <Sidebar rooms={this.state.rooms} />
        );
    }

});

React.render(
    React.createElement(App),
    document.querySelector('body')
);