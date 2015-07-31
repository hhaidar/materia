'use strict';

var fs = require('fs'),
    path = require('path'),
    yaml = require('js-yaml');

module.exports = +function() {

    var file = path.resolve(__dirname, '../../settings.yml');

    return yaml.safeLoad(fs.readFileSync(file, 'utf8'));

}();
