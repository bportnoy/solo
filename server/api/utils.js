var express = require('express');
var db = require('../db/db.js');
var Pending = require('../models/pending.js');
var mailer = require('./mailer.js');
var Bluebird = require('bluebird');
var bcrypt = require('bcrypt-nodejs');

var genSalt = Bluebird.promisify(bcrypt.genSalt);
var genHash = Bluebird.promisify(bcrypt.hash);


exports.requestInvite = function(req,res){
  var email = req.body.email;
  new Pending ({email: email})
  .fetchOne()
  .then(function(user){
    //check to see if they've already requested an invitation
    if (!user){
      //add 'em
      newRequest = new Pending({
        email: email
      });

      newRequest.save().then(function(user){
        //send confirmation from mailgun
        mailer.sendSignupConf(email);
        res.send(201);
      });
    } else { //they're gettin' greedy!
      console.log('Invitation already requested for this e-mail.');
      res.status(409).send('Invitation already requested for this e-mail.');
    }
  })
};


exports.inviteUser = function(id, ids, override){
  new Pending ({id: id})
  .fetchOne()
  .then(function(user){
    if (!user){
      console.error('Unable to invite user with ID #' + id + ', not found.');
    } else if (user.get('block_invite') && override === null){
      console.log('Skipping invite of user with ID#' + id + ' due to block.');
    } else {
      genSalt().then(function(salt){
        genHash(user,salt,null).then(function(hash){
          user.set('token', hash);
          user.set('invited', true);
          user.set('invited_at', Date());
          user.save();
          mailer.sendInvitation(user.get('email'), hash);
        });
      });
    }
  });
}

exports.checkToken = function(req, res, next){
  var token = req.session.token;
  new Pending ({token: token})
  .fetchOne()
  .then(function(user){
    if (!user) res.redirect('/');
    else next();
  });
};

