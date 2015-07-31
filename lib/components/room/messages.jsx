'use strict';

var React = require('react');

var Message = require('./message');

module.exports = React.createClass({

    render: function() {

        var messages = [];

        for (var i=0; i < 50; i++) {
            messages.push(<Message />);
        }

        return (
            <ul className="lc-messages">
                {messages}
            </ul>
        );

    }

});
