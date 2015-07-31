'use strict';

var React = require('react'),
    mui = require('material-ui'),
    TextField = mui.TextField;

module.exports = React.createClass({

    render: function() {
        return (
            <div className="lc-entry">
                <TextField
                    className="lc-entry-input"
                    hintText="Got something to say?"
                    multiLine={true} />
            </div>
        );
    }

});
