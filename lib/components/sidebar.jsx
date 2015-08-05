'use strict';

var React = require('react'),
    mui = require('material-ui');

var RoomActions = require('../actions/room');

var List = mui.List,
    ListItem = mui.ListItem;

module.exports = React.createClass({

    render: function() {
        return (
            <div className="lc-sidebar">
                <List>
                    {this.props.rooms.map(function(room, i) {
                        return <ListItem
                            onClick={RoomActions.switch.bind(null, room.id)}
                            key={room.id}
                            primaryText={room.name}
                            secondaryText={room.description}
                            secondaryTextLines={1} />
                    })}
                </List>
            </div>
        );
    }

});
