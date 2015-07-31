'use strict';

var React = require('react');

module.exports = React.createClass({

    render: function() {

        return (
            <li className="lcb-message">
                <img className="lcb-message-avatar"
                    src="https://www.gravatar.com/avatar/bfa5bfae39ce7bdd1e0f385c961d4afa?s=30" />
                <div className="lcb-message-meta">
                    <span className="lcb-message-name">
                        <span className="lcb-message-displayname">
                            Ramanan
                        </span>
                        <span className="lcb-message-username">
                            @ramanan
                        </span>
                    </span>
                    <time className="lcb-message-time">Today at 4:53 PM</time>
                    <div className="lcb-message-text">yep</div>
                </div>
            </li>
        );

    }

});
