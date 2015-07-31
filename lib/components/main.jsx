'use strict';

var React = require('react');

module.exports = React.createClass({

    render: function() {
        return (
            <div className="lc-main">
                {this.props.children}
            </div>
        );
    }

});
