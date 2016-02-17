'use strict';

var bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate: function(user, options, callback) {
        if(user.password) {
          bcrypt.hash(user.password, 10, function(err, hash) {
            if (err) return callback(err);
            user.password = hash; //store the hash in the users password
            callback(null, user); //dont have an error u pace in null
          });
        } else {
          callback(null, user);  //if a password does not exisit
        }
      }
    }
  });
  return user;
};