var Pending = require('../models/pending.js');

module.exports = function(app){

  app.get('/join', function(req,res){
    token = req.query.token;

    new Pending ({token: token})
    .fetchOne()
    .then(function(user){
      if (!user){
        res.redirect('/');
        console.log('Invalid token.');
      } else {
        var session = req.session.regenerate(function(err){
          req.session.token = token;
          res.redirect('/signup');
        }); 


      }
    });

  // app.get('/soundcloud',) // check for token session

    res.status(203).send(req.query.token);
  });

};