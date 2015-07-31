'use strict';

var React = require('react');

var Messages = require('./messages'),
    Entry = require('./entry');

module.exports = React.createClass({

    render: function() {
        return (
            <div className="lc-room">
                <Messages />
                <Entry />
            </div>
        );
    }

});