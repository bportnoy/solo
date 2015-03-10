// var express = require('express');
// var db = require('../db/db.js');
// var Pending = require('../models/pending.js');
// var mailer = require('./mailer.js');

// var requestInvite = function(req,res){
//   var email = req.body.email;
//   new Pending ({email: email})
//   .fetch()
//   .then(function(user){
//     //check to see if they've already requested an invitation
//     if (!user){
//       //add 'em
//       newRequest = new Pending({
//         email: email
//       });

//       newRequest.save().then(function(user){
//         //send confirmation from mailgun
//         mailer.sendSignupConf(email);
//         res.send(201);
//       });
//     } else { //they're gettin' greedy!
//       console.log('Invitation already requested for this e-mail.');
//       res.status(409).send('Invitation already requested for this e-mail.');
//     }
//   })
// };

// module.exports = requestInvite;