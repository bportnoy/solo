var express = require('express');
var db = require('../db/db.js');
var Pending = require('../models/pending.js');

var requestInvite = function(req,res){
  var email = req.body.email;
  console.log(email);
  res.send();
};

module.exports = requestInvite;