'use strict';

var React = require('react'),
    Router = require('react-router');

var Route = Router.Route,
    HashLocation = Router.HashLocation;

var App = require('./lib/components/app'),
    Room = require('./lib/components/room');

Router.run(
    <Route handler={App}>
        <Route path="/" handler={Room} />
    </Route>,
    HashLocation,
    function(Root) {
        React.render(<Root/>, document.body);
    }
);
