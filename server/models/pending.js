var db = require('../db/db.js');
var Promise = require('bluebird');


var Pending = db.Model.extend({
  tableName: 'pending',
  hasTimestamps: true,
  // initialize: function(){
  //   this.on('creating', this.hashPassword);
  // },
  // comparePassword: function(attemptedPassword, callback) {
  //   bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
  //     callback(isMatch);
  //   });
  // },
  // hashPassword: function(){
  //   var cipher = Promise.promisify(bcrypt.hash);
  //   // return a promise - bookshelf will wait for the promise
  //   // to resolve before completing the create action
  //   return cipher(this.get('password'), null, null)
  //     .bind(this)
  //     .then(function(hash) {
  //       this.set('password', hash);
  //     });
  // }
});

module.exports = Pending;
