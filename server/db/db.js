var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'bradley',
    password: 'password',
    database: 'inviteme',
    charset: 'utf8',
    filename: path.join(__dirname, '/db/inviteme.sqlite')
  }
});

db.knex.schema.hasTable('pending').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('pending', function (user) {
      user.increments('id').primary();
      user.string('email', 255).unique();
      user.string('token', 300).index();
      user.string('final_userid', 100);
      user.boolean('invited').defaultTo(0);
      user.boolean('block_invite').defaultTo(0);
      user.timestamp('invited_at');
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('email', 255).unique();
      user.string('username', 255).unique();
      user.string('password',255);
      user.integer('admin_level',1);
      user.string('accessToken', 255);
      user.string('refreshToken', 255);
      user.json('profile');
      user.string('auth_type', 50);
      user.integer('invite_id').references('id').inTable('pending');
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
