var Pending = require('../models/pending.js');

module.exports = function(app){
  
  app.post('/requestinvite', function(req,res){
    var email = req.body.email;
    console.log(Pending);
    new Pending ({email: email})
    .fetch()
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
  });

  app.get('/test', function(req,res){
    res.send('hooray');
  });

}

// module.exports = function(app){

//   app.get('/join', function(req,res){
//     console.log('/api/join');
//     var token = req.query.token;

//     new Pending ({token: token})
//     .fetch()
//     .then(function(user){
//       if (!user){
//         res.redirect('/');
//         console.log('Invalid token.');
//       } else {
//         var session = req.session.regenerate(function(err){
//           req.session.token = token;
//           res.redirect('/signup');
//         }); 
//       }
//     });

//   // app.get('/soundcloud',) // check for token session

//   });

// };
