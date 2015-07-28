'use strict';

var React = require('react'),
    mui = require('material-ui'),
    ThemeManager = new mui.Styles.ThemeManager();

var AppCanvas = mui.AppCanvas;

module.exports = React.createClass({
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
            <AppCanvas>
            </AppCanvas>
        );
    }
});