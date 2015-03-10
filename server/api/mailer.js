var Mailgun = require('mailgun');
var MailComposer = require('mailcomposer');

var mg = new Mailgun.Mailgun(process.env.MAILGUN_KEY);

exports.sendSignupConf = function(recipient){
  
  mg.sendText('no-reply@bradleyportnoy.com',recipient,
    'We\'re saving your spot!',//subject line
    'Thanks for signing up for the beta. We\'ll let you know as soon as there\'s a space available!', //body
    null, //servername
    {'X-Mailgun-Tag': 'Signup Confirmation'}, //options
    function(err){
      console.error('Error sending with Mailgun:' + err);
    });

};

exports.sendInvitation = function(recipient, code){
  
  mg.sendText('no-reply@bradleyportnoy.com',recipient,
    'You\'re Invited',//subject line

    'Thanks for waiting - we\'re ready for you! Click this link to join: \n' +
    process.env.DOMAIN + '/auth/join?token=' + code
    + '\n\n We can\'t wait for you to try it out! \n' +
    'Thanks,\nThe InviteMe Team', //body

    null, //servername

    {'X-Mailgun-Tag': 'Send Invitation'}, //options

    function(err){
      console.error('Error sending with Mailgun:' + err);
    });

};
