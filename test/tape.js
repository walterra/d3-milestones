var tape = require('tape');
var _test = require('tape-promise').default; // <---- notice 'default'
module.exports = _test(tape); // decorate tape
