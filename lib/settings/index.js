'use strict';

var fs = require('fs'),
    path = require('path'),
    yaml = require('js-yaml');

var file = path.resolve(__dirname, '../../settings.yml');

module.exports = yaml.safeLoad(fs.readFileSync(file, 'utf8'));