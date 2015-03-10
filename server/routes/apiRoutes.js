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

  app.get('/fetchpending', function(req,res){ // DON'T FORGET TO AUTHENTICATE HERE!!!
    new Pending ({invited: false})
    .fetchAll()
    .then(function(users){
      res.send(users);
    })
  });

  app.post('/sendinvites', function(req,res){ // DON'T FORGET TO AUTHENTICATE HERE!!!
    ids = req.body.ids;
    console.log(ids);
    Pending.forge().query(function(qb){
      qb.where({id:0}).select().then(function(result){console.log(result);});
    });
    //   function(query){
    //   query.whereIn('id',ids).then(function(users){
    //     console.log(users);
    //   });
    // });
  // }
  // );

});

};