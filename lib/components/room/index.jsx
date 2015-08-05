'use strict';

var React = require('react');

var Messages = require('./messages'),
    Entry = require('./entry');

module.exports = React.createClass({

    render: function() {
        var room = this.props.conversations.current;
        return (
            <div className="lc-room">
                <div className="lc-room-header">
                    <h1 className="lc-room-heading">
                        {room.name}
                    </h1>
                </div>
                <Messages />
                <Entry />
            </div>
        );
    }

});