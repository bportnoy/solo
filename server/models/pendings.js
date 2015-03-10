var db = require('../db/db.js');
var Pending = require('./pending.js');

var Pendings = new db.Collection();

Pendings.model = Pending;

module.exports = Pendings;
