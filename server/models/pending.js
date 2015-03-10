var db = require('../db/db.js');

var Pending = db.Model.extend({
  tableName: 'pending',
  hasTimestamps: true,
});

module.exports = Pending;
