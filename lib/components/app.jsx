'use strict';

var React = require('react'),
    Reflux = require('reflux'),
    ReactRouter = require('react-router'),
    RouteHandler = ReactRouter.RouteHandler,
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager();

var Sidebar = require('./sidebar');

module.exports = function(stores) {

    return React.createClass({

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
                <div>
                    <Sidebar rooms={this.state.rooms} style="display: none;" />
                    <RouteHandler/>
                </div>
            );
        }

    });

}