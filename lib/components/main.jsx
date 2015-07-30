'use strict';

var React = require('react'),
    mui = require('material-ui');

var List = mui.List,
    ListItem = mui.ListItem;

module.exports = function() {

    return React.createClass({

        render: function() {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        }

    });

}