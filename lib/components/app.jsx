'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    ReactRouter = require('react-router'),
    RouteHandler = ReactRouter.RouteHandler,
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager();

var RoomsStore = require('../stores/rooms'),
    ConversationsStore = require('../stores/conversations');

var Sidebar = require('./sidebar'),
    Main = require('./main');

module.exports = React.createClass({

    mixins: [
        Reflux.connect(RoomsStore, 'rooms'),
        Reflux.connect(ConversationsStore, 'conversations')
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
            <div className="lc-app">
                <Sidebar rooms={this.state.rooms} />
                <Main>
                    <RouteHandler conversations={this.state.conversations} />
                </Main>
            </div>
        );
    }

});